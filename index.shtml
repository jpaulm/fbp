<!DOCTYPE html>
<!-- Based on Ashley theme by Brent Jackson (http://jxnblk.com) //-->
<!-- Heavily modified by Mayuresh Kathe (http://kathe.in/) //-->
<html lang="en">
  <head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Flow-based Programming</title>
		<meta name="description" content="Official website for flow-based programming" />
		<meta name="keywords" content="flow-based programming c c++ java c# lua dataflow componentry streams threads fbp flow-based distributed development multicore multithreading parallelism maintainability visual asynchronism asynchronous SOA MOM programming NoFlo flowhub dataflow simplicity productivity paradigm" />
		<link href='http://fonts.googleapis.com/css?family=Gentium+Book+Basic' rel='stylesheet' type='text/css'>
		<meta name=viewport content='width=device-width, initial-scale=1'>
		<link rel="stylesheet" type="text/css" href="../style.css">
		<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
	</head>
	<body>
		<header>
			<h1>Flow-based Programming</h1>			
<p><img src="panta.png" alt="Panta rhei" style="position:relative; bottom:-10px;"> <span style="font-size: 20px;font-style:italic">(Panta rhei)</span> <span style="font-size: 20px;"> - Everything flows.</span></p>

<p align="center"><img style="width: 650px; height: 389px;"
        alt="Animation of simple diagram" src="fbp_anims.gif"><br>
    </p>
		</header>

		<div class="content wrap">
			<section class="posts">
				<article class="post text">
				<p>
        <!--iframe src="http://youtu.be/zZ3HVEdoie0?autoplay=1" width="500" height="281" frameborder="0"></iframe-->  
        
					<p>In computer programming, Flow-Based Programming (FBP) is a programming paradigm, discovered/invented by <a href="http://www.jpaulmorrison.com/">J. Paul Rodker Morrison</a> in the late '60s, that uses a "data processing factory" metaphor for designing and building applications.  FBP defines applications as networks of "black box" processes, which communicate via data chunks (called Information Packets) travelling across predefined connections (think "conveyor belts"), where the connections are specified externally to the processes. These black box processes can be reconnected endlessly to form different applications without having to be changed internally. FBP is thus naturally component-oriented.</p>
					<p>FBP is a special case of <a href="https://en.wikipedia.org/wiki/Dataflow">dataflow</a> programming characterized by asynchronous, concurrent processes "under the covers", Information Packets with defined lifetimes, named ports, "bounded buffer" connections, and definition of connections external to the components - it has been found to support improved development time and maintainability, reusability, rapid prototyping, simulation, improved performance, and good communication among developers,  maintenance staff, users, systems people, and management - not to mention that FBP naturally takes advantage of multiple cores... without the programmer having to struggle with the intricacies of multitasking!</p> 
<p> <div style="text-align: center"><img src="bottling_factory.png" alt="Bottling factory" height = "400"> </div>
</p>
<p>FBP is a very different paradigm from conventional programming, being more of an "assembly line" image of data processing.  It therefore involves a drastic "paradigm shift", which is not natural for the majority of programmers.  Over the last 40+ years, therefore, many companies have come out with FBP-like or "FBP-inspired" systems (to borrow Joe Witt of Hortonworks' term), which do not involve the required paradigm shift, including some of the biggest and most successful companies in the industry, such as IBM, Microsoft, Facebook, Google, and the New York Times (see <a href="http://www.jpaulmorrison.com/fbp/links_external.html">FBP External References</a>).  Unfortunately, without the FBP paradigm shift, these systems cannot fully achieve the advantages listed above, so we are now starting to call the true FBP architecture "classical" FBP.   It is hard for someone reading documentation to tell whether a given product calling itself "FBP- like" is "classical" or not,  but, in general, asynchronism is the litmus test.  Joe Witt's <a href="https://nifi.apache.org/">NiFi</a> is an example of a "classical" FBP implementation, while generally systems based on JavaScript will not be "classical"!    </p>

<p>FBP is described in J. Paul Morrison's book <a href="http://www.jpaulmorrison.com/fbp/book.html">"Flow-Based Programming: A New Approach to Application Development"</a>, now in its 2nd edition, which can be obtained in paperback form from <a href="http://www.amazon.com/Flow-Based-Programming-2nd-Application-Development/dp/1451542321">Amazon</a>, or in 2 e-book formats: <a href="http://www.amazon.com/Flow-Based-Programming-J-Paul-Morrison-ebook/dp/B004PLO66O">Kindle</a> and <a href="http://www.lulu.com/shop/j-paul-morrison/flow-based-programming-2nd-edition/ebook/product-21172063.html">epub</a>.</p>
<p>Further down on this web page you will find a bunch of useful links, including a list of currently supported programming languages (on <a href="https://github.com/jpaulm">GitHub</a>), and some videos demonstrating the use of the FBP diagramming tool, <a href="..\graphicsstuff\index.shtml">DrawFBP</a>.  During FBP's early days, networks were coded by hand, and initially we used pencil and paper, followed by more sophisticated graphical tools, whether or not they played well with FBP software.  However, with the advent of good graphical support, we now have a powerful graphical tool (<a href="..\graphicsstuff\index.shtml">DrawFBP</a>), and in recent years the emphasis has been shifting to doing the diagramming on-line, and then generating the networks (we can see this progression with other flow tools on the market).  Now that compile and run functions have been added to DrawFBP, the developer can do much of the development graphically, and on-line.  
</p>
				


        <!--/article> 
        <article class="post text"-->
            <p>If you have come across Flow-Based Programming by way of NoFlo or Flowhub, it is recommended that you read <a href="noflo.html"><i>FBP vs. FBP-inspired Systems</i></a>, which attempts to highlight the differences and similarities between FBP proper, or "classical" FBP, (the subject of this web site) on the one hand, and NoFlo and other similar FBP-inspired systems on the other.  FBP does involve a significant paradigm shift for the majority of programmers, which may be why a number of systems such as NoFlo have appeared in recent years that appear to be a halfway house between FBP and conventional programming.  While the FBP paradigm shift may cause some trouble at first, given the prevalence of the older programming approaches, in fact it embodies a simple mental model (not "simple" as in easy but
"simple" as in elegant, to quote Joe Witt), and has proven over several decades to result in applications that are more understandable and maintainable than those built using the conventional (von Neumann) paradigm.</p>

<p>For those of you who do not have the patience to wade through the whole book (TL;DR!), I would strongly advise reading at least <a href="http://www.jpaulmorrison.com/fbp/concepts_book.shtml">Chapter 3, Basic Concepts</a>, as this describes the fundamental concepts of FBP.  This chapter will answer many of your basic questions about FBP, and act as a starting point if you wish to dig deeper. </p>

<p>We are in the process of "growing" a <a href="https://github.com/jpaulm/fbp-tutorial-filter-file">tutorial</a> which will introduce the reader to the basic concepts of FBP by means of a series of "steps", which use the diagramming tool DrawFBP to progressively expand an application diagram and generate and run code at many of those steps.  </p>

 <!--<p>We know you are tired of Powerpoint presentations, but <a href="http://www.jpaulmorrison.com/fbp/FBPnew.ppt">this one</a> (from 2007) gives quite a good overview of FBP - as it was at that time.  There is also a <a href="http://player.vimeo.com/video/79329015">video</a> (not very professional, I'm afraid!), where I present this at a Meetup in Toronto in Sept. 2013 organized by Paul Tarvydas, CEO of Tarvydas-Sanford Controls Inc., and Dann Toliver. It has a few jokes and reminiscences, and may be more accessible than the straight Powerpoint presentation!   The Paul referred to in the video is Paul Tarvydas. Towards the end (at 40:12) there is a brief demo of the FBP diagramming tool, <a href="..\graphicsstuff\index.shtml">DrawFBP</a>.</p>-->
  </p>   
        <p>Links:
					<ol>
						<li><a href="introduction.html">Introduction</a></li>
						<li><a href="history.html">History</a></li>
						<li><a href="concepts.html">Concepts</a></li>
						<li><a href="https://github.com/jpaulm/fbp-tutorial-filter-file">Tutorial</a> (under development)</li>						
						<li><a href="software.html">Software</a>:  
						<ul>
						<li><a href="software.html#JavaFBP">JavaFBP</a>
						<ul>
						<li><a href="software.html#JavaFBPWS">JavaFBP Web Sockets</a>
						</li>
						</ul>
						</li>
						<li><a href="software.html#C#FBP">C#FBP</a>
						</li>
						<li><a href="software.html#CppFBP">CppFBP (C++ and Lua)</a>
						</li>
						<li><a href="software.html#JSFBP">JSFBP</a> (JavaScript FBP, using Marcel Laverdet's <a href="https://github.com/laverdet/node-fibers">node-fibers</a>)
						</li>
						<li><a href="..\graphicsstuff\index.shtml">DrawFBP</a>
						</li>
						</ul></li>
						<br/>
						<li><a href="examples.html">Examples</a></li>
						<li><a href="oops.shtml">Comparison with OO</a></li>
						<li><a href="comparison.html">Comparison with other paradigms and methodologies</a></li>
						<li><a href="FBPnew.ppt">PowerPoint presentation on FBP (2007)</a></li> 
						<li><a href="noflo.html">FBP vs. FBP-inspired Systems</a></li>
						<li><a href="http://www.jpaulmorrison.com/cgi-bin/wiki.pl">Old C2-style FBP Wiki</a></li>
						<li><a href="biblio.html">Bibliography</a></li>
						<li><a href="1stedchaps.html">Chapters from the first edition - online</a></li>
						
						<li><a href="links_external.html">External links</a></li>
						<li><a href="https://github.com/jpaulm">FBP on GitHub</a>: The implementations listed above under "Software"</li>
					</ol>
					 </p>
					 
					 <p>
       <iframe src="http://www.youtube.com/embed/up2yhNTsaDs" width="500" height="420" frameborder="0" allowfullscreen=true></iframe> </p>
<p><i>Video Interview with J. Paul Rodker Morrison, Summer 2013 </i></p>
        
					 <p>In addition, there are six Youtube videos on  <a href="..\graphicsstuff\index.shtml">DrawFBP</a>, illustrating a number of basic ("classical") FBP concepts (what we are now calling "FBP-inspired" or "FBP-like" systems do not necessarily contain all of these, although DrawFBP should be able to support most of these systems):
					 <ol><li><a href="https://www.youtube.com/watch?v=OrKenPOV4Js">DrawFBP video #1</a></li>
					 <li><a href="https://www.youtube.com/watch?v=9NXYNxDjFWY">DrawFBP video #2</a></li>
					 <li><a href="https://www.youtube.com/watch?v=-AmzfhV2hIU">DrawFBP video #3</a></li>
					 <li><a href="https://www.youtube.com/watch?v=F0lKQpIjfVE">DrawFBP video #4</a></li>
					 <li><a href="https://www.youtube.com/watch?v=5brTDk8cpNo">DrawFBP video #5</a> - concept of "subnets", both at design and implementation time</li>
                                                     <li><a href="https://youtu.be/IvTAexROKSA">DrawFBP video #6</a> - simple interactive systems using WebSockets, with demo of JavaFBP-WebSockets (JavaFBP and HTML5)</li> 
					 </ol>
					 </p>
					 <p>Finally, a <a href="http://player.vimeo.com/video/79329015">video</a> presentation at a Meetup in Toronto in Sept. 2013 organized by Paul Tarvydas, CEO of Tarvydas-Sanford Controls Inc., and Dann Toliver, also containing a few jokes and reminiscences...
</p>
					<p>Google group on <a href="http://groups.google.com/group/flow-based-programming">Flow-Based Programming</a></p>
					
					<p>C2-style <a href="http://www.jpaulmorrison.com/cgi-bin/wiki.pl">Flow-Based Programming Wiki</a> (last maintained in 2010)</p>
					
                                                    <p>More general <a href="https://github.com/flowbased/flowbased.org/wiki">FBP Wiki</a> by Vladimir Sibirov, et al., intended to cover both "classical" FBP and FBP-inspired approaches (still under development )</p>
					<p><a href="https://flow-based.org/">FBP Specification wiki</a> - under development by Vladimir Sibirov 					
					
					<p></p>      
					<p>Twitter hashtag: <a href="https://twitter.com/search?q=%23FlowBased&src=hash">#FlowBased</a></p>
				
       
         
</article>


<article class="post text">
<!--
<p style="text-align:center"><img style="width: 800px;"
        alt="Schematic Brokerage app" src="EB2a.jpg"></p>
<p>Schematic Brokerage application (expand blocks, add caches, multiplexing, to taste)</p>  -->   

<figure> <img src="EB2a.jpg"  alt="Schematic Brokerage app" width="800px"
<figcaption>Schematic Brokerage application (expand blocks, add caches, multiplexing, etc.)</figcaption>
</figure>
   
<p>
<a href="../index.shtml">J Paul Rodker Morrison</a>
</p>

</article>
			</section>
		</div>

    
		<footer class="small wrap">	
			<table border="0">
	<tr>
		<td>
			<p class="small">Content Copyright &copy; J Paul Morrison. All rights reserved.</p>
		</td>
	</tr>
	<tr>
		<td align="center">
			<img src="/cgi-sys/Count.cgi?df=jpaul-jpaul5.dat|display=Counter|ft=6|md=5|frgb=100;139;216|dd=B"> 
		</td>
	</tr>
</table>	
		
		
     </footer>
		
	</body>
</html>
