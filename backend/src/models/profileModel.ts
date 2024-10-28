



/*
    SQL Profile Table
    ------------------
     id INT AUTO_INCREMENT PRIMARY KEY,
     id INT NOT NULL,
     bio TEXT,
     age INT,
     gender ENUM("male", "female", "other"),
     preferences JSON,  
     profile_picture VARCHAR(255),
     location VARCHAR(100),
     FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE

*/


import MySqlDatabase from "../database/mysqlDatabase.js";
import Database from "../database/databaseInterface.js";



interface ProfileData<T> {
    id: number; 
    bio: string, 
    age: number, 
    gender: string, 
    preferences: object, 
    profile_picture: any, 
    location: string 
}

interface ProfileUpdateData<T> {
    id: number
    bio?: string, 
    age?: number, 
    gender?: string, 
    preferences?: object, 
    profile_picture?: any, 
    location?: string 
}

class ProfileModel {
    /* The ProfileModel holds methods for storing profile data into a database
     * By default, the database is MySql, however can be changed for testing purposes 
     * Each profile holds a userId which references a user 
     * Methods
     * --------
	    
     */

    public database: Database;

    constructor() { 
	this.database = new MySqlDatabase();
    }

    public async add(profile: ProfileData<object>): Promise<void> { 
	//Add a profile with the given profile data
	try {
	    await this.database.create("profiles", profile);

	} catch (e) { 
	    throw new Error(`Error adding profile with user id: ${profile.id}: ${e}`);
	}
    }

    public async update(profile: ProfileUpdateData<object>): Promise<void> {
	//update a profile with the user id and the given profile data 
	try {
	    await this.database.update("profiles", profile.id, profile);

	} catch (e) { 
	    throw new Error (`Error updating profile with user id: ${profile.id}: ${e}`)
	}
    }

    public async getProfileById(id: number): Promise<ProfileData<object>> {
	//Get a profile by the user id 
	try {
	    const profileData = await this.database.get("profiles", undefined, {id: id});
	    return profileData; 

	} catch (e) {
	    throw new Error(`Error getting profile with id ${id}`);
	}
    }
}


export default ProfileModel;


















