# General
This is an open source, Javascript game using Kontra.js  
Main gameplay is focused on a roller-coaster system, on which the player will play with acceleration and brakes, both of which use a certain amount of limited resources.  
There will be multiple levels, of different diffculty levels and style, and a vague storyline that drives the gameplay.  
  
# Physical System  
//no class allowed  
{ddx, ddy} getAcceleration( {conditions} )  
	- conditions:  
		○ slope  
		○ current speed  
	- intended effects:  
		○ slow down on a uphill  
		○ speed up on downhill  
		○ maintain/tiny slow down on plain terrain  
		○ jump and gravity:  
			§ gravity downward (how to explain?)  
			§ gravity magnitude: ???  
			§ jump when there is gravity and running over a gap  
			§ zero gravity zone in some levels  
(more to add here)  

# Architecture  
Levels:  

Elements:  

Controlling:  

Story line:  
