### GoFBP Concepts and Support for WebSockets

The GoFBP WebSockets support works very similarly to the corresponding `JavaFBP` facilities - see https://github.com/jpaulm/javafbp-websockets#readme - esp. the diagrams at the end.

This facility (two components in https://github.com/jpaulm/gofbp/tree/master/components/websocket ) may be thought of as a "kit" for building a wide variety of WebSocket applications. 
`request.go` fields requests from a client, while `respond.go` returns results back to the same user.  Both of these components use the FBP substream concept, where a substream is a series of Information Packets ("IPs"), surrounded by "bracket IPs" ("open" and "close").

Here is the "processing" component for this simple test case (we will assume that you are familiar with how to build a GoFBP component):
<code>
package components

import (
	"github.com/jpaulm/gofbp/core"
)

type WSAnsReq struct {
	ipt core.InputConn
	out core.OutputConn
}

func (wsansreq *WSAnsReq) Setup(p *core.Process) {
	wsansreq.ipt = p.OpenInPort("IN")
	wsansreq.out = p.OpenOutPortOptional("OUT")
}

func (WSAnsReq) MustRun() {}

func (wsansreq *WSAnsReq) Execute(p *core.Process) {
	pkt := p.Receive(wsansreq.ipt)
	for {

		if pkt == nil {
			break
		}
		p.Send(wsansreq.out, pkt)

		pkt = p.Receive(wsansreq.ipt) // connection
		p.Send(wsansreq.out, pkt)

		pkt = p.Receive(wsansreq.ipt) //"namelist"
		p.Discard(pkt)

		pkt = p.Create("line1")
		p.Send(wsansreq.out, pkt)
		pkt = p.Create("line2")
		p.Send(wsansreq.out, pkt)
		pkt = p.Create("line3")
		p.Send(wsansreq.out, pkt)

		pkt = p.Receive(wsansreq.ipt) // close bracket
		p.Send(wsansreq.out, pkt)

		pkt = p.Receive(wsansreq.ipt)
		if pkt.Contents.(string) == "@kill" {
			p.Send(wsansreq.out, pkt)
			pkt = p.Receive(wsansreq.ipt)
		}
	}

}

</code>
