'use client';

import { Sidebar } from 'flowbite-react';
import { GießenButton } from "./gießen-button";

export default function DefaultSidebar() {
	return (
		<Sidebar aria-label="Default sidebar example" className="h-full">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<div className="mt-4">
						<Sidebar.Item 
							href="#"
							className="bg-tremor-brand text-white hover:bg-tremor-brand"
						>
							<p>
								Salat
							</p>
						</Sidebar.Item>
					</div>
					

					<Sidebar.Item
						href="#"
					>
						<p>
							Tomate
						</p>
					</Sidebar.Item>
					<Sidebar.Item
						href="#"
					>
						<p>
							Gurke
						</p>
					</Sidebar.Item>
					<GießenButton />
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}


