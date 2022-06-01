using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Microsoft.MixedReality.Toolkit.UI;

public class ControlVizScaling : MonoBehaviour
{
    public GameObject slider;

    void Update()
    {
        float factor = slider.GetComponent<PinchSlider>().SliderValue;
        // Debug.Log(factor);
        transform.localScale = new Vector3(factor, factor, factor);
    }
}
