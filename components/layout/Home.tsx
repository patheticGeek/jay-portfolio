/* eslint-disable prettier/prettier */
import React from 'react'

import graphicDesigner from "@assets/graphicDesigner.svg"

const HomeComponent = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-custom">
			<div className="w-9/12 h-4/6  relative text-right">
				<div className="text-8xl capitalize" >UI <span className="text-blue-500" >designer</span></div>
			</div>
			<img src="url(../assets/GraphicsDesigner.svg)" alt="" />

		</div>
	)
}

export default HomeComponent
