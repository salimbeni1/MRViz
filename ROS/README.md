# ROS (melodic) docker

execute the following commands in the given order. (everything should happen in the same terminal)

## unzip the rosbag in the data directory !

## setup ros container

```sh
docker build -t melodic -f ROS/Dockerfile ROS/

docker run -it --rm -v ${pwd}/data:/home/data -p 10000:10000 melodic /bin/bash
```

PS: If you encounter errors because of the tail `/r`, try to add this command after the line 13 of the dockerfile.

```Dockerfile
RUN sed -i 's/\r$//' /setup.sh
```

## setup ros_tcp_endpoint

```sh
source devel/setup.bash
roslaunch ros_tcp_endpoint endpoint.launch &
```

## setup rosbag loop play

you can test other rosbags if you place them in the data folder and adapt the following command

```sh
rosbag play /home/data/ex1.bag --loop
```

# ROS 2 (foxy) docker

execute the following commands in the given order. (everything should happen in the same terminal)

## unzip the rosbag in the data directory !

## setup ros container
```
docker build -t foxy -f ROS2/Dockerfile ROS2/

docker run -it --rm -v ${pwd}/data:/home/data -p 10000:10000 foxy /bin/bash
```

## setup ros_tcp_endpoint
```
ros2 run ros_tcp_endpoint default_server_endpoint --ros-args -p ROS_IP:=0.0.0.0 > ros_tcp_endpoint.log &
```
## setup rosbag loop play
you can test other rosbags if you place them in the data folder and adapt the following command
```
ros2 bag play /home/data/rosbag2_2022_04_05-15_29_46 --loop > rosbag.log &
```
## check everything is setup correctly
this command should display the values of the point cloud
```
ros2 topic echo /points_raw
```



# docker compose (not working at the moment)
```
docker compose build --no-cache
docker compose up --remove-orphans

docker exec -it ros2-ros_2-1 /bin/bash
```