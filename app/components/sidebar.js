'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiCog } from 'react-icons/hi';

export default function DefaultSidebar() {
	return (
		<Sidebar aria-label="Default sidebar example" className='h-full'>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item
						href="#"
						icon={HiChartPie}
					>
						<p>
							Dashboard
						</p>
					</Sidebar.Item>

					<Sidebar.Item
						href="#"
						icon={HiInbox}
					>
						<p>
							Benachrichtigungen
						</p>
					</Sidebar.Item>
					<Sidebar.Item
						href="#"
						icon={HiCog}
					>
						<p>
							Einstellungen
						</p>
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}


