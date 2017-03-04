var video_output = document.getElementById('video-container');

document.write('another test here');

function login(form) {
	var phone = window.phone = PHONE({
		number			: form.username.value || 'Anonymous',
		publish_key		: 'pub-c-6d6048aa-8fd4-4ca8-b8d2-82b62abfc65a',
		subscribe_key	: 'sub-c-95ec0bae-0107-11e7-b54e-0619f8945a4f',
	});
	phone.ready(function(){form.username.style.background='#55ff5b'; document.write('ready'); });
	phone.receive(function(session){
		session.connected(function(session) {video_output.appendChild(session.video); });
		session.ended(function(session) {video_output.innerHTML=''; });
	});
	return false; //So the form is kept on the screen
}

function makeCall(form) {
	if (!window.phone) alert('Please make a login.');
	else phone.dial(form.number.value);
	return false; //Same thing
}
