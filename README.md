# MRViz

Mixed Reality toolkit for ROS visualization (on Hololens)

[Milestone 1](./milestone_1.pdf) · Milestone 2

## directory setup

### MRVIZ

main UNITY application

#### Scenes

These two scenes act in the same way. Both visualization will follow the cube in the scene. But:

`MoveWithCube`: Makes the drawing gameObject the child of a cube. Updates smoothly. Only works for robot-centered viz.

`MoveWithTF`: A publisher in the scene will publish the TF-tree based on the position of the cube. Update a little slow beacudse of the publishing frequency. Ideally, this way works for any viz but require some manual configuration.

If you want to test `MoveWithTF` scene, make sure that you have installed the `tf2` package in the docker before you run `rosbag play <DATA_PATH>`.

```sh
sudo apt-get update
sudo apt-get install ros-$ROS_DISTRO-tf2-tools ros-$ROS_DISTRO-tf
```

### ROS

tools to launch ros docker containers as well as their rosbags

~~test:~~
~~directory used to place all UNITY projects used to test individual packages configurations~~

### web-app

directory for the website to showcase the project

## main project setup

### clone repository

### open MRViz directory as a project with Unity Hub

### launch the ROS2 docker container with the appropriate rosbag (follow intructions)

### press play on Unity
