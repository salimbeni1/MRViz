# MRViz – Mixed reality toolkit for ROS visualization

![Screenshot](./Screenshot.png)

MRViz is a mixed reality toolkit which allows to visualize a robot’s real-time perception of its environment, e.g. a LIDAR point cloud or a heatmap, in the physical world using a Microsoft HoloLens 1/2 headset, Windows integrated cameras and Android devices.

A demonstration of MRViz's capabilities is available on [our webpage](https://mrviz.vercel.app).


## Setup
The toolkit can be tested using Unity and a rosbag file which simulates a robot.

Steps:
1. Clone the repository
2. Open the MRViz directory as a project using Unity Hub
3. Build the project for "PC, Mac & Linux Standalone"
4. Launch a Docker container with the used rosbag (follow instructions in README inside ```ROS``` directory)
5. Open the MoveWithCube scene in Unity
6. Press the Play button

## Android
MRViz can be tested in the real world using an Android phone.

Setup:
1. Install the Unity Remote app on your phone
2. Build the Unity project for "Android"

## More details

Look at the extended Readme [here](README_detailed.md)
