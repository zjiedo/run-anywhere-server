<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style type="text/css">
       * {
           margin: 0;
           padding: 0;
       }
        .layout {
            width: 90%;
            margin: 20px auto;
        }
        .layout ul {
            display: flex;
            flex-wrap: wrap;
        }
        .layout ul li {
            width: 20%;
            padding: 8px 0;
            list-style: none;
        }
        .layout ul li a {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
            color: #222;
           
        }
        .layout ul li a:hover {
            color: #999
        }
    </style>
    <title>{{ title }}</title>
    <style> 
    
    </style>
</head>
<body>
    <div class="layout"> 
        <ul>
            {{#each files}} 
                <li>
                    <a href='{{../dir}}/{{this}}'>{{this}}</a>
                </li>
            {{/each}}
        </ul>
    </div>
   
</body>
</html>