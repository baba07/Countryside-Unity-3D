function OnTriggerEnter(info : Collider){
	var coinAudio: AudioSource=GetComponent.<AudioSource>();
	coinAudio.Play();
	CoinSystem.coincount++;
	transform.position=Vector3(0,-1000,0);
	yield WaitForSeconds(1.5);
	Destroy(gameObject);

}