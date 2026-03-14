# Quote_Generator
## Date:
## Objective:
To create a simple thirukkural generator using HTML, CSS, and JavaScript that displays a new random thirukkural each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

### 1. Create the HTML Structure:
<ul>
  <li>Add a heading Thirukkural Generator</li>
  <li>Use a div or p to display the Thirukkural (Tamil couplet).</li>
  <li>Use another p or span to display the meaning or explanation.</li>
  <li>Add a button labeled “Get Thirukkural”.</li>
  <li>Add a label showing the Kural number.</li>
</ul>

### 2. Style the Layout Using CSS:

<ul>
  <li>Center everything on the page using Flexbox.</li>
  <li>Style the quote box with:
  <ul type="square">
    <li>Padding</li>
    <li>Background color</li>
    <li>Rounded borders</li>
    <li>Soft shadow</li>
    <li>Add hover effects for the button.</li>
  </ul>
  </li>
</ul>

### 3. Add JavaScript Functionality:
<ul>
  <li>Store an array of Thirukkural objects containing:
  <ul type="square">
    <li>Kural number</li>
    <li>Kural Meaning</li>
  </ul>
  </li>
  <li>When the button is clicked:
  <ul type="square">
    <li>Generate a random index using Math.random().</li>
    <li>Retrieve the corresponding Thirukkural object.</li>
    <li>Display the Kural number and meaning in the HTML.</li>
    <li>Update content dynamically using innerText.</li>
  </ul>
  </li>
</ul>

## Code:
```
index.html
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Thirukkural Generator</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<h1>📜 Thirukkural Generator</h1>

<div class="kural-box">

<p id="kural">Click the button to generate a Thirukkural</p>

<p id="meaning"></p>

</div>

<button onclick="generateKural()">Generate Thirukkural</button>

</div>

<footer>
Created by Your Name
</footer>

<script src="script.js"></script>

</body>
</html>
style.css

body{
font-family: Arial, sans-serif;
background: linear-gradient(120deg,#6a11cb,#2575fc);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:0;
}

.container{
background:white;
padding:30px;
border-radius:10px;
text-align:center;
width:400px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

h1{
margin-bottom:20px;
}

.kural-box{
margin:20px 0;
padding:20px;
background:#f2f2f2;
border-radius:8px;
}

button{
padding:10px 20px;
font-size:16px;
border:none;
background:#2575fc;
color:white;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#1b5fd1;
}

footer{
margin-top:20px;
color:white;
font-size:14px;
}

```
## Output:
![alt text](<Screenshot (35).png>)
## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
