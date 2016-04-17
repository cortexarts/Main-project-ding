#pragma strict

var menuSkin : GUISkin;

private var showGUI : boolean = false;

private var playerGUI : PlayerGUI;


function Start ()
{
	playerGUI = GameObject.Find("First Person Controller").GetComponent(PlayerGUI);
}

function Update ()
{
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		showGUI = !showGUI;
	}

	if(showGUI == true)
	{
		Time.timeScale = 0;
		GameObject.Find("First Person Controller").GetComponent(MouseLook).enabled = false;
		GameObject.Find("Main Camera").GetComponent(MouseLook).enabled = false;
		GameObject.Find("FPSArms_Axe@Idle").GetComponent(PlayerControl).enabled = false;
		GameObject.Find("Main Camera").GetComponent(RayCastCollect).enabled = false;
	}

	if(showGUI == false)
	{
		Time.timeScale = 1;
		GameObject.Find("First Person Controller").GetComponent(MouseLook).enabled = true;
		GameObject.Find("Main Camera").GetComponent(MouseLook).enabled = true;
		GameObject.Find("FPSArms_Axe@Idle").GetComponent(PlayerControl).enabled = true;
		GameObject.Find("Main Camera").GetComponent(RayCastCollect).enabled = true;
	}
}

function OnGUI()
{
	if(showGUI == true)
	{
		GUI.skin = menuSkin;
			GUI.BeginGroup(new Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 300, 300));
				GUI.Box(Rect(0, 0, 300, 300), "PAUSED BITCH");

				GUI.EndGroup();
	}
}