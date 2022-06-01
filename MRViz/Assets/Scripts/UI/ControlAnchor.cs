using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Microsoft.MixedReality.Toolkit.UI;


public class ControlAnchor : MonoBehaviour
{
    public GameObject worldAnchor;
    public GameObject robotAnchor;
    public GameObject scalingSlider;
    public GameObject rotationSlider;

    Transform worldAnchorTF;
    
    public Transform robotAnchorTF;
    Transform currentTF;

    void Update()
    {
        float factor = scalingSlider.GetComponent<PinchSlider>().SliderValue;
        float degree = (rotationSlider.GetComponent<PinchSlider>().SliderValue - 0.5f) * 360;

        if (robotAnchor.activeSelf)
        {
            currentTF = robotAnchorTF;
            currentTF.localScale = new Vector3(factor, factor, factor);
            currentTF.localEulerAngles = new Vector3(0, degree, 0);
        }
        else if (worldAnchor.activeSelf)
        {

            if (worldAnchorTF == null)
            {
                worldAnchorTF = GameObject.Find("odom_combined").transform;
            }

            worldAnchorTF.parent = worldAnchor.transform;
            currentTF = worldAnchorTF;
            
            currentTF.localScale = new Vector3(factor, factor, factor);
            currentTF.localEulerAngles = new Vector3(0, degree, 0);
            
        }

        //if (currentTF != null)
        //{
        //    currentTF.localScale = new Vector3(factor, factor, factor);
        //    currentTF.localEulerAngles = new Vector3(0, degree, 0);
        //}
    }
}
