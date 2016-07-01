// Global jQuery vars
var $body = $('body');

// Node 1 jQuery vars
var $node1anim 				= $('.node1-anim');
var $envelopes 				= $('.envelope');
var $redEnvelopes			= $('.red-envelope-1,.red-envelope-2,.red-envelope-3,.red-envelope-4');
var $redEnvelope1			=	$('.red-envelope-1');
var $redEnvelope2			=	$('.red-envelope-2');
var $redEnvelope3			=	$('.red-envelope-3');
var $redEnvelope4			=	$('.red-envelope-4');
var $yellowEnvelopes	= $('.yellow-envelope-1,.yellow-envelope-2,.yellow-envelope-3,.yellow-envelope-4');
var $yellowEnvelope1	=	$('.yellow-envelope-1');
var $yellowEnvelope2	=	$('.yellow-envelope-2');
var $yellowEnvelope3	=	$('.yellow-envelope-3');
var $yellowEnvelope4	=	$('.yellow-envelope-4');
var $blueEnvelopes		= $('.blue-envelope-1,.blue-envelope-2,.blue-envelope-3,.blue-envelope-4');
var $blueEnvelope1		=	$('.blue-envelope-1');
var $blueEnvelope2		=	$('.blue-envelope-2');
var $blueEnvelope3		=	$('.blue-envelope-3');
var $blueEnvelope4		=	$('.blue-envelope-4');
var $greenEnvelopes		= $('.green-envelope-1,.green-envelope-2,.green-envelope-3,.green-envelope-4');
var $greenEnvelope1		=	$('.green-envelope-1');
var $greenEnvelope2		=	$('.green-envelope-2');
var $greenEnvelope3		=	$('.green-envelope-3');
var $greenEnvelope4		=	$('.green-envelope-4');

var $stars = $('.star');
var $star1 = $('.star-1');
var $star2 = $('.star-2');
var $star3 = $('.star-3');
var $star4 = $('.star-4');

// Node 2 jQuery vars
var $node2anim 	= $('.node2-anim');
var $cursor 		= $('#cursor');
var $letterY 		= $('.letter-y');
var $letterO 		= $('.letter-o');
var $letterU 		= $('.letter-u');
var $letterAt 	= $('.letter-at');
var $letterDot 	=	$('.letter-dot');
var $letterC 		= $('.letter-c');
var $letterO2 	= $('.letter-o2');
var $letterM 		= $('.letter-m');

//Node 3 jQuery vars
var $node3anim = $('.node3-anim');
var $devices = $('.device');
var $greenTablet = $('.green-tablet');
var $redPhone = $('.red-phone');
var $yellowLaptop = $('.yellow-laptop');


//Node 4 jQuery vars
var $node4anim = $('.node4-anim');
var leftPath = [{left:150, top:110},{left:140, top:30},{left:270, top:40}];
var leftReverse = [{left:270, top:40},{left:140, top:30},{left:150, top:110}];
var rightPath = [{left:420, top:100},{left:430, top:30},{left:300, top:40}];
var rightReverse = [{left:300, top:40},{left:430, top:30},{left:420, top:100}];

var $docs= $('.docs');
var $blueDoc = $('.blue-doc');
var $redDoc = $('.red-doc');
var $greenDoc = $('.green-doc');
var $yellowDoc = $('.yellow-doc');
var $driveLogo = $('.drive-logo');


$body.on('nodeOpened', function(event, node) {
	if (node == 'node1') nodeOneTL.restart().play();
	if (node == 'node2') nodeTwoTL.restart().play();
	if (node == 'node3') nodeThreeTL.restart().play();
	if (node == 'node4') nodeFourTL.restart().play();

});

$body.on('nodeClosed', function(event, node) {
	if (node == 'node1') TweenMax.to($node1anim, 0.3, {opacity:0});
	if (node == 'node2') TweenMax.to($node2anim, 0.3, {opacity:0});
	if (node == 'node3') TweenMax.to($node3anim, 0.3, {opacity:0});
	if (node == 'node4') {
		TweenMax.to($node4anim, 0.2, {opacity:0});
		TweenMax.to($driveLogo, 0.15 , {rotationX:-90});
		nodeFourLoop.restart().stop();
	}
});

var nodeOneTL = new TimelineMax({delay:0.25});
		nodeOneTL
						.to($node1anim, 0.1, { display:'block', opacity:1, delay:0.5 })
						.staggerTo($envelopes, 0.2, {opacity:1,scale:1},0.035)

						.addLabel('organizeMail')
						.to($redEnvelopes, 1.5, {left: 75, ease: Elastic.easeOut.config(1, 0.4), delay:1.05},'organizeMail')
						.to($yellowEnvelopes, 1.5, {left: 155, ease: Elastic.easeOut.config(1, 0.4), delay:1.1},'organizeMail')
						.to($blueEnvelopes, 1.5, {left: 315, ease: Elastic.easeOut.config(1, 0.4), delay:1.15},'organizeMail')
						.to($greenEnvelopes, 1.5, {left: 235, ease: Elastic.easeOut.config(1, 0.4), delay:1.2},'organizeMail')
						.staggerTo($stars, 0.2, {opacity:1,delay:0.5}, 0.4)

						.addLabel('prioritizeMail')
						.to($stars, 1.5, {top:49, ease: Elastic.easeOut.config(1, 0.4),delay:1}, 'prioritizeMail')
						.to($redEnvelope3, 1.5, { top: 65, ease: Elastic.easeOut.config(1, 0.4),delay:1}, 'prioritizeMail')
						.to($redEnvelope1, 1.7, {top: 120, ease: Elastic.easeOut.config(1, 0.4),delay:1.1}, 'prioritizeMail')
						.to($redEnvelope2, 1.7, {top: 175, ease: Elastic.easeOut.config(1, 0.4),delay:1.2}, 'prioritizeMail')
						.to($greenEnvelope4, 1.5, {top: 65, ease: Elastic.easeOut.config(1, 0.4),delay:1}, 'prioritizeMail')
						.to($greenEnvelope1, 1.7, {top: 120, ease: Elastic.easeOut.config(1, 0.4),delay:1.1}, 'prioritizeMail')
						.to($greenEnvelope2, 1.7, {top: 175, ease: Elastic.easeOut.config(1, 0.4),delay:1.2}, 'prioritizeMail')
						.to($greenEnvelope3, 1.7, {top: 230, ease: Elastic.easeOut.config(1, 0.4),delay:1.3}, 'prioritizeMail')
						.to($blueEnvelope2, 1.5, {top: 65, ease: Elastic.easeOut.config(1, 0.4),delay:1}, 'prioritizeMail')
						.to($blueEnvelope1, 1.7, {top: 120, ease: Elastic.easeOut.config(1, 0.4),delay:1.1}, 'prioritizeMail')

						.restart().stop();

var nodeTwoTL = new TimelineMax({delay:0.5});
		nodeTwoTL
						.to($node2anim, 0.1, { display:'block',opacity:1 })
						.to($cursor, 0.5, { display:'block' })

						.addLabel('letterY')
						.set($cursor, { left:33, delay: 1 }, 'letterY')
						.set($letterY, { opacity:1, delay: 1},'letterY')

						.addLabel('letterO')
						.set($cursor, { left:63, delay:0.1}, 'letterO')
						.set($letterO, { opacity:1,delay:0.1},'letterO')

						.addLabel('letterU')
						.set($cursor, { left:93, delay:0.1}, 'letterU')
						.set($letterU, { opacity:1,delay:0.1},'letterU')

						.addLabel('letterAt')
						.set($cursor, { left:143, delay:0.1}, 'letterAt')
						.set($letterAt, { opacity:1,delay:0.1},'letterAt')

						.addLabel('letterDot')
						.set($cursor, { left:538, delay:0.5}, 'letterDot')
						.set($letterDot, { opacity:1,delay:0.5},'letterDot')

						.addLabel('letterC')
						.set($cursor, { left:570, delay:0.1}, 'letterC')
						.set($letterC, { opacity:1,delay:0.1},'letterC')

						.addLabel('letterO2')
						.set($cursor, { left:601, delay:0.1}, 'letterO2')
						.set($letterO2, { opacity:1,delay:0.1},'letterO2')

						.addLabel('letterM')
						.set($cursor, { left:653, delay:0.1}, 'letterM')
						.set($letterM, { opacity:1,delay:0.1},'letterM')

						.restart().stop();

var nodeThreeTL = new TimelineMax({delay:0.25});
		nodeThreeTL
						.to($node3anim, 0.1, { display:'block', opacity:1})
						.addLabel('wobbleDevices')
						.staggerTo($devices, 0.2, {opacity:1,scale:1, rotation:0},0.15, 'wobbleDevices')
						.to($redPhone, 8, {bezier:{type:"thru", curviness:2, values:[{x:5, y:5}, {x:5, y:0}, {x:0, y:0}]},  ease:Linear.easeNone, repeat:-1, repeatDelay:0}, 'wobbleDevices')
						.to($greenTablet, 6, {bezier:{type:"thru", curviness:2, values:[ {x:7, y:5}, {x:7, y:0},{x:0, y:0}]}, ease:Linear.easeNone, repeat:-1, repeatDelay:0}, 'wobbleDevices')
						.to($yellowLaptop, 4, {bezier:{type:"thru", curviness:2, values:[{x:12, y:-5}, {x:5, y:-2},{x:0, y:0}]}, ease:Linear.easeNone, repeat:-1}, 'wobbleDevices')
						.restart().stop();



var nodeFourLoop =  new TimelineMax({repeat:-1, paused:true, repeatDelay:0.2});
	nodeFourLoop


			.addLabel('frame1')
			.set($greenDoc, {opacity:1}, 'frame1')
			.to($greenDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:rightPath,}, scale:0.5}, 'frame1')
			.to($greenDoc, 1, {delay:0.75, opacity:0}, 'frame1')
			.addLabel('frame2', 'frame1+=2.5')
			.set($greenDoc, {left:270, top:40, opacity:1}, 'frame2')
			.to($greenDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:leftReverse,}, scale:1}, 'frame2')
			.to($greenDoc, 0.50, {delay:2, opacity:0}, 'frame2')

			.addLabel('frame3', 'frame1+=1')
			.set($yellowDoc, {opacity:1}, 'frame3')
			.to($yellowDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:leftPath,}, scale:0.5}, 'frame3')
			.to($yellowDoc, 1, {delay:0.75, opacity:0}, 'frame3')
			.addLabel('frame4', 'frame3+=2.5')
			.set($yellowDoc, {left:300, top:40, opacity:1}, 'frame4')
			.to($yellowDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:rightReverse,}, scale:1}, 'frame4')
			.to($yellowDoc, 0.50, {delay:2, opacity:0}, 'frame4')

			.addLabel('frame5')
			.set($blueDoc, {left:140, top:110, opacity:1}, 'frame5')
			.to($blueDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:rightPath,}, scale:0.5}, 'frame5')
			.to($blueDoc, 1, {delay:0.75, opacity:0}, 'frame5')
			.addLabel('frame6', 'frame5+=2.5')
			.set($blueDoc, {left:270, top:40, opacity:1}, 'frame6')
			.to($blueDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:leftReverse,}, scale:1}, 'frame6')
			.to($blueDoc, 0.50, {delay:2, opacity:0}, 'frame6')

			.addLabel('frame7', 'frame5+=1')
			.set($redDoc, {opacity:1}, 'frame7')
			.to($redDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:leftPath,}, scale:0.5}, 'frame7')
			.to($redDoc, 1, {delay:0.75, opacity:0}, 'frame7')
			.addLabel('frame8', 'frame7+=2.5')
			.set($redDoc, {left:300, top:40, opacity:1}, 'frame8')
			.to($redDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:rightReverse,}, scale:1}, 'frame8')
			.to($redDoc, 0.50, {delay:2, opacity:0}, 'frame8');

var nodeFourTL = new TimelineMax({delay:0.25, paused:true, onComplete:function() {
	nodeFourLoop.play();
}});
	nodeFourTL
			.to($node4anim, 0.15, { display:'block', opacity:1}, 'setup')
			.to($driveLogo, 0.17, {rotationX:0})
			.set($blueDoc, {left:140, top:110, opacity:1})
			.set($greenDoc, {left:140, top:110, opacity:0})
			.set($yellowDoc, {left:140, top:110, opacity:0})
			.set($redDoc, {left:420, top:110, opacity:0})

			.to($blueDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:leftPath,}, scale:0.5}, 'left1')
			.to($blueDoc, 1, {delay:0.75, opacity:0}, 'left1')
			.set($blueDoc, {left:300, top:40, opacity:1}, 'left1+=2.5')
			.to($blueDoc, 2.5, {bezier:{type:"quadratic", curviness:2, values:rightReverse,}, scale:1}, 'left1+=2.5')
			.to($blueDoc, 0.50, {delay:2, opacity:0}, 'left1+=2.5');
