var reminderInterval;

document.getElementById('startButton').addEventListener('click', function() {
  reminderInterval = setInterval(function() {
    alert('Remember to drink water and stay hydrated!');
  },100000); 

  
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('stopButton').style.display = 'block';
});

document.getElementById('stopButton').addEventListener('click', function() {
  clearInterval(reminderInterval);
})
