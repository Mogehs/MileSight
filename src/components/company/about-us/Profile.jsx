import React from 'react'

const Profile = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center sm:gap-5 lg:pt-3">
        <div className="content flex flex-col items-center gap-4">
        <h1 className="sm:text-4xl text-2xl  font-semibold">Company Profile</h1>
        <p className="sm:w-[80vw] p-1 text-gray-600 text-justify">Milesight offers multi-potential sensing products to capture the most meaningful data and makes it accessible across diverse applications. It innovatively applies emerging technologies such as Al, 5G, and loT to distinct use scenarios. With a commitment to making sensing matter, Milesight quickly responds to customer-specific challenges and collaborates with an expanding network of partners to deliver unique data value. It is determined to make real, positive impacts in smart buildings, intelligent traffic, intelligent security, smart cities, and beyond.</p>
        </div>
        <div className="video w-[80vw] pt-5 lg:w-[50vw] sm:w-[60vw] ">
            <video className="w-full rounded-lg" controls src="https://youtu.be/LrgVRwDzlpw?si=iA04pN86jcSUu9JW"></video>
        </div>
    </div>
  )
}

export default Profile;