using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Microsoft.MixedReality.Toolkit.UI;

public class ControlVizRotation : MonoBehaviour
{
    public GameObject slider;

    void Update()
    {
        float degree = (slider.GetComponent<PinchSlider>().SliderValue - 0.5f) * 360;
        //Debug.Log(degree);
        transform.localEulerAngles = new Vector3(0, degree, 0);
    }
}
