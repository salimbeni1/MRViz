using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RobotAgent : MonoBehaviour
{
    Transform odom;
    Transform baseLink; 

    void Update()
    {
        if (odom == null)
        {
            odom = GameObject.Find("odom_combined").transform;
            baseLink = odom.Find("base_footprint");
        }

        transform.position = baseLink.position;
        transform.rotation = baseLink.rotation;
    }
}
