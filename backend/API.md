

# API Documentation

<--- Users --->

- Post /users: 
    Create a new user 
    Request --> { name, email, password }
    Response --> { status }

- Get /users/name/<id>
    Get a user's name by their id 
    Request --> { none }
    Response --> { status, name }

- Get /users/email/<id>
    Get a user's email by their id 
    Request --> { none }
    Response --> { status, email }

- Put /users/<id>
    Update a user's data by their id 
    Request --> { name(optional), email(optional), password(optional) }
    Response --> { status }

- Delete /users/<id>
    Delete a user's data by their id 
    Request --> { none }
    Response --> { status }

- Post /login
    Log in a user, compares the password with the given email and returns the status of the comparison
    and the id of the user 
    Request --> { email, password }
    Response --> { status, id }

<--- Profiles ---> 

- Post /profiles
    Create a new profile 
    Request --> {user_id, bio, age, gender, preferences(json), profile_picture, location}
    Response --> { status }

