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
- Preetham model
- GUI user interactive control

## Difficulties
- **Rain & Snow**

For rain and snow objects, we create them as points material with the right texture from loading and adding the corresponding rain and snow images. We make the for loops for each object to initialize them with random coordinates in the plane. We made different manipulations on the random function to simulate the right movement (rain objects fall straight from the sky, and snow objects fall from the sky with floating effect).

- **Clouds**

We create our cloud as a grouped plane object. We do not want the cloud to be as random as rain and snow. We have to write a new random function for clouds. At first, when we changed the camera's position, the cloud would look like a line since the cloud object is a plane. Therefore, we have to compute the normal vectors of each cloud. Then, get the camera's position matrix and pass it and the normal vectors we get for each cloud into the lookAt function in the render. This is how we achieve the goal of making the user see 3D objects using only the plane shader. 

- **Wind**

Since winds, in reality, are not visible and concrete matter, we have to modify our implementation of rain and snow to show the effects it creates. However, solely editing the direction of rain/snowfall and adding a horizontal acceleration would be problematic, as the particles will generate above their point of disappearance and eventually emigrate out of the camera's view. This issue was handled by creating a range to constraint the regeneration location of particles. Furthermore, the velocity also needs to be reset so each particle will not inherit their speed at disappearance after regeneration. This is tackled by subtracting a calculated value of velocity that the particle is expected to gain during the previous generation.

- **Terrian**

We create the terrain as a plane object, and generate its height and width geometry on each point with an improved Perlin Noise algorithm. The resulting terrain object has continuous mountains and reef with different random height, which adds the real visual experience in the scene with good performance. We also generate its scaled canvas texture associated with its height and width geometry data and the perlin noise value, so the texture mapping results in a layering texture that differentia the angle and level on the terrain. 

- **Ocean** (library referenced)

We create our ocean as a plane object with the fixed geometry and load the right normal image for the ocean to create the normal map for the right texture. We add the mirror effect on the ocean surface to warp the scene from above to below. We also add the water flow on the surface associated with the mirror effect to simulate the ocean wave, making our ocean plan object realistic. To have some fun with it, we add the color option for the light reflection on the ocean, enabling the user to color the ocean with any color that you like in the RGB color. 
 
- **Sky** (library referenced)

For the skybox and its color alone with the daylight and twilight light effects, we researched the related solution and found a very realistic and practical analytic model for it, which is called the Preetham model, aka the analytical model for full spectral skydome radiance. Empowered by the model and fine-tuned the parameter such as inclination and azimuth, along with the manipulation on the position of the directional light object of the scene, we uniform the light effects to generate the correct and beautiful light radiance on the daylight and twilight effect with a broad range of turbidities and artifacts eliminated.

- **GUI Control Panel & Performance monitor**

The user can use the mouse to turn their view angel and use the up, down, left, right arrows key to move the camera in the scene. We implemented a graphic user interface control panel on the right-up corner of the page that users can click on different object sessions such as background music, wind, rain, snow, cloud, sky, water, etc. Then play with varying values of index to change the scene with add on complexity. Also, we add an FPS indicator on the left up corner to monitor our code's performance and bring convenience for us to debug our code.

- **Real-time Adjustment**

Real-time adjustment is complicated since we have to take care of every change made by the user. Adjustments on different weather effects cause different changes in the scene. To achieve this, we use the redraw function inside render. For example, when the user changes the rain scale, our program removes the original rain object from the scene. Then, it redraws the rain object with the new value. By doing so, the user gets a real-time display.


## Reference
- Sky: https://threejs.org/examples/?q=sky#webgl_shaders_sky  
This explains how to use sky library inside three.js.  
- Water: https://threejs.org/examples/?q=ocean#webgl_shaders_ocean  
This explains how to use sky library inside three.js.  
- Terrain: https://threejs.org/examples/webgl_geometry_terrain.html  
This gives us the idea of how to implement Perlin Noise and Diamond Square Algorithm.  
