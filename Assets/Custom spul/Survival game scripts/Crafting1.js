#pragma strict

var MenuSkin : GUISkin;

//References
var player : GameObject;
var mainCamera : GameObject;
var arms : GameObject;

//Icons
var campfireIcon : Texture;
var tentIcon : Texture;
var spareIcon : Texture;
var spareIcon2 : Texture;
var spareIcon3 : Texture;
var spareIcon4 : Texture;
var spareIcon5 : Texture;
var spareIcon6 : Texture;
var spareIcon7 : Texture;

//Player prefabs
var campFire : GameObject;
var tent : GameObject;
var spare : GameObject;
var spare2 : GameObject;
var spare3 : GameObject;
var spare4 : GameObject;
var spare5 : GameObject;
var spare6 : GameObject;
var spare7 : GameObject;


private var showGUI : boolean = false;

private var invScript : Inventory;

function Start()
{
	invScript = GetComponent(Inventory);
}

function Update()
{
	if(Input.GetKeyDown("c"))
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
		GUI.skin = MenuSkin;
			GUI.BeginGroup(new Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 300, 300));
				GUI.Box(Rect(0, 15, 300, 300), "Crafting System");
				
				if(GUI.Button(Rect(40, 60, 50, 50), GUIContent (campfireIcon, "Build a campfire")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						campFire.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}
				
				if(GUI.Button(Rect(40, 130, 50, 50), GUIContent (tentIcon, "Build a tent")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						tent.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}
				
						
				if(GUI.Button(Rect(40, 200, 50, 50), GUIContent (spareIcon, "Build a spare")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						spare.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}
				
				//SECOND COLUMN!
				if(GUI.Button(Rect(125, 60, 50, 50), GUIContent (spareIcon2, "Build a spare!")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						spare.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}
				
				if(GUI.Button(Rect(125, 130, 50, 50), GUIContent (spareIcon3, "Build spare 3!")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						spare.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}
				
				if(GUI.Button(Rect(125, 200, 50, 50), GUIContent (spareIcon4, "Build spare 4!")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						spare.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}

				//THIRD COLUMN
				if(GUI.Button(Rect(210, 60, 50, 50), GUIContent (spareIcon4, "Build spare 5!")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						spare.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}

				if(GUI.Button(Rect(210, 130, 50, 50), GUIContent (spareIcon3, "Build spare 6!")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						spare.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}
				
				if(GUI.Button(Rect(210, 200, 50, 50), GUIContent (spareIcon4, "Build spare 7!")))
				{
					if(invScript.wood >= 6 && invScript.stone >= 3)
					{
						spare.SetActive(true);
						invScript.wood -= 6;
						invScript.stone -= 3;
					}
				}
				
				GUI.Label(Rect(100, 275, 100, 40), GUI.tooltip);
				GUI.EndGroup();
	}
}




































