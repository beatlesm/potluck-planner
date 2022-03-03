## **Front End Url**

-   [https://potluck-5044.herokuapp.com/](https://potluck-5044.herokuapp.com/)

Test login:

username: admin
password: password

## **Test Login Information**

- **User as admin**
``` 
    username: admin,
    password: password,
```
- **user as organizer**
```
    username: tom,
    password: 1234,

    username: jerry,
    password: 1234,
```
- **user as organizer**
```
    username: odie,
    password: 1234,

    username: garfield,
    password: 1234,
```
# **Endpoints**

**baseUrl** : [https://potluck-5044.herokuapp.com/](https://potluck-5044.herokuapp.com/)


# **Potluck Endpoints**

## - **Delete a Potluck Event**

    [DELETE] api/potlucks/:potluck\_id/:user\_id
    **Note:** Requires provided token in request headers as authentication: token

## - **Potluck Events I&#39;ve created and am invited to**

    [GET] api/potlucks/:user\_id/potlucks
    **Note:** Requires provided token in request headers as authentication: token

## - **Get a specific potluck**

    [GET] api/potlucks/:potluck\_id
    **Note:** Requires provided token in request headers as authentication: token

## - **Create a Potluck Event:**

    [POST] api/potlucks/:user\_id
    **expects:** all potluck details, invites, and items
    **returns** : all potlucks related to the user\_id
    **Note:** Requires provided token in request headers as authentication: token

## - **Update a Potluck Event:**

    [PUT] api/potlucks/:potluck\_id/:user\_id
    **expects:** all potluck details, invites, and items
    **returns:** all potlucks related to the user\_id
    **Note:** Requires provided token in request headers as authentication: token

# **User Endpoints**

## - **Get All Users:**

    [GET] api/users
    **returns** all usernames, emails, and ids
    **Note:** Requires provided token in request headers as authentication: token

## - **Register New User:**

    [POST] api/auth/register
    **expects** {username, password, email}
    **returns** {username, email, user\_id, token}

## - **User Logs In:**

    [POST] api/auth/login
    **expects** {username, password}
    **returns** {username, email, user\_id, token}

## **Run Local Server**

    npm run server

