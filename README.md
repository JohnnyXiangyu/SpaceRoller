# General
An open source, Javascript game using [Kontra.js](https://github.com/straker/kontra)  
Main gameplay is focused on a roller-coaster system, on which the player will play with acceleration and brakes, both of which use a certain amount of limited resources.  
There will be multiple levels, of different diffculty levels and style, and a vague storyline that drives the gameplay.  
This file contains spec info. Develop log is in separate folders.  

Plaase do not put resource file directly into ./code directory.  

# Folder Structure  
code: source codes for the game, including index.html and js files  
* engine: contains the kontra module file
* modules: modules that we write  
* asssets: assets  

resources: all resource files go here  
* art: art work that's gonna be directly used in the game  
* documents: all documents that's related to development process, including art work used for inspiration  
* MISC_external: misc files from external source  
* MISC_study: files used in study process only  

# Physical System  
//no class allowed  
{ddx, ddy} getAcceleration( {conditions} )  
conditions:  
* slope  
* current speed  

intended effects:  
* slow down on a uphill  
* speed up on downhill  
* maintain/tiny slow down on plain terrain  
* jump and gravity:  
  * gravity downward (how to explain?)  
  * gravity magnitude: ???  
  * jump when there is gravity and running over a gap  
  * zero gravity zone in some levels  
    
(more to add here)  

# Designs  
Levels:  
  
Terrain:  
  * use modular terrain
    * divide map into block and assign pre-determined landscape modules to each block  
    * physical attrubutes assigned to each landscape module
  
Player:  
  
Controlling:  
  
Story line:  
  
# Architecture  
Some modules will be created, only to classify algorithms during development. The actual production might just use single file to save space.  
* Player: defines a group of objects with some status of the player cart  
* background: background objects should be created here  
* physics: physical algorithms  
* Tracks: defines an group of objects with definition of tracks  

(to be added: classes)