# Final Project
UCLA CS 174A  
Group Number: 11  
Team members: Aaron Chang, Junjie Zhu, Yu-Hsuan Liu  

## How to see the demo?
**TO OBSERVE THE FULL OUTCOME OF OUR PROJECT, IT IS SUGGESTED TO DOWNLOAD PACKAGE FROM GITHUB INSTEAD OF CLICKING ON THE DEMO URL.**
- If you do not want to download the whole project, click on this link. However, you will not be able to see the weather effects.
https://intro-graphics-master.github.io/term-project-11/

- If you download the whole project to your computer, please follow the instructions below to run the project.  
   a) On Windows, open the file "host.bat". On Mac, open the file "host.command"  
   b) Open the browser (Chrome is recommended) and navigate to the url http://localhost:8000/  

## Introduction
This project is a weather simulation system, which can simulate sun, snow, rain, and wind effects. The background setting consists of the sky, water, terrain and clouds. There are several scale bars and options on the right for the users to input what weather they would like to add to the scene. The weather patterns could also be combined with one or more other options to generate layered weather patterns. Users are also able to input intensity, range, etc. of whichever weather option they select, which adds to the complexity of the scene.  

## Advance Topics
- SCSS set up
- npm configuation
- Webpack configuation
- Three.js library
- Canvas adjustment
- Display port real-time self adjustment
- Camera movement control
- Perlin Noise
- Diamond Square Algorithm
- GUI user interactive control

## Difficulties
- **Environment setup for three.js, npm, and webpack**  
    As we have never utilized these environments for previous assignments, most of our early efforts were spent setting it up and becoming familiarized with it. Nevertheless, we still could not achieve sufficient maneuverability around the webpack libraries, which led us to insert all js code into index.html.

- **Clouds**  
a) Random function: We do not want the clouds to be as random as rain and snow. We have to write a new random function for clouds.  
b) Plane Shader: At first, when we changed the position of the camera, the cloud would look like a line since it’s a plane. Therefore, we have to compute the normal vectors of each cloud. Then, get the position matrix of the camera and pass it and the normal vectors we get for each cloud into the lookAt function in the render. This is how we achieve the goal of making the user see 3D objects even by merely using the plane shader.  

- **Real-time Adjustment**  
Real-time adjustment is complicated since we have to take care of the outcome of every change from the user. Adjustments on different weather effects cause different changes in the scene. To achieve this, we use the redraw function inside render. For example, when the user changes the scale of rain, our program removes the original rain object from the scene. Then, it redraws the rain object with the new value. By doing so, the user gets a real-time display.  

- **Wind**  
Since winds in reality are not visible, solid matter, we have to modify our implementation of rain and snow to show the effects it creates. However, solely editing the direction of rain/snowfall and adding a horizontal acceleration would be problematic, as the particles will generate above their point of disappearance and eventually emigrate out of the view of the camera. This issue was handled by creating a range to constraint the regeneration location of particles. Furthermore, the velocity also needs to be reset so each particle will not inherit their speed at disappearance after regeneration. This is tackled by subtracting a calculated value of velocity the particle is expected to have gained during the previous generation.  

- **General Bugs**  
Our modifications on the code were not always recognized by the program. Typical examples include the implementation of the GUI as well as the clouds, which took us a significant amount of time to figure out the way the program identifies these lines of code.  

## Team Members' Contribution
Aaron Chang:
- Gathering resources
- Wind

Junjie Zhu:
- Assist team members with environment setup
- Gathering resources
- Clouds, Rain, Snow
- GUI

Yu-Hsuan Liu:
- Gathering resources
- Sky, Water, Terrain

Nevertheless, this is only a rough classification as we helped each other achieve the final outcome.  

## Reference
- Sky: https://threejs.org/examples/?q=sky#webgl_shaders_sky  
This explains how to use sky library inside three.js.  
- Water: https://threejs.org/examples/?q=ocean#webgl_shaders_ocean  
This explains how to use sky library inside three.js.  
- Terrain: https://threejs.org/examples/webgl_geometry_terrain.html
This gives us the idea of how to implement Perlin Noise and Diamond Square Algorithm  
