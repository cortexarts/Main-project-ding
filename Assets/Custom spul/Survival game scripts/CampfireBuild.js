#pragma strict

var campfirePrefab : Transform;
var player : GameObject;

private var canBuild : boolean = true;
private var invScript : Inventory;

function Start()
{
	GetComponent.<Renderer>().material.color = Color.green;
	GetComponent.<Renderer>().material.color.a = 0.5;
	invScript = player.GetComponent(Inventory);
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "Terrain" || col.gameObject.tag == "Tree")
	{
		GetComponent.<Renderer>().material.color = Color.red;
		GetComponent.<Renderer>().material.color.a = 0.5;
		canBuild = false;
	}
}

function OnTriggerExit (col : Collider)
{
	if(col.gameObject.tag == "Terrain" || col.gameObject.tag == "Tree")
	{
		GetComponent.<Renderer>().material.color = Color.green;
		GetComponent.<Renderer>().material.color.a = 0.5;
		canBuild = true;
	}
}

function Update()
{
	if(Input.GetKeyDown("b") && canBuild == true)
	{
		Instantiate(campfirePrefab, player.transform.position + Vector3(-2, 0, -1), Quaternion.identity);
		player.GetComponent(Crafting1).campFire.SetActive(false);
		invScript.campFire++;
	}

}




