<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style type="text/css">
        body {
            background: red
        }
    </style>
    <title>{{ title }}</title>
    <style> 
    
    </style>
</head>
<body>
    <ul>
        {{#each files}} 
            <li>
                <a href='{{../dir}}/{{this}}'>{{this}}</a>
            </li>
        {{/each}}
    </ul>
   
</body>
</html>