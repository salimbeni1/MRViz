using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControlUIShowHide : MonoBehaviour
{
    bool show = false;

    public void showHide()
    {
        show = !show;
        gameObject.SetActive(show);
    }
}
