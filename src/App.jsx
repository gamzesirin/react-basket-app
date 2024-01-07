import './App.css'

import { Badge, Button, Container, Drawer, Group, Indicator, Input, SimpleGrid } from '@mantine/core'
import { IconCircleCheck, IconShoppingCart } from '@tabler/icons-react'
import { List, ThemeIcon } from '@mantine/core'

import CardComponent from './components/Card'
import { useState } from 'react'

const storeItems = [
	{
		id: 1,
		name: 'Shoes 1',
		src: 'ay1',
		price: 4000,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 2,
		name: 'Perfume',
		src: 'parfüm1',
		price: 2000,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 3,
		name: 'Keyboard',
		src: 'daktilo',
		price: 3000,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 4,
		name: 'Shoes',
		src: 'ay2',
		price: 1000,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 5,
		name: 'Perfume',
		src: 'parfüm2',
		price: 500,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 6,
		name: 'Brush',
		src: 'fırca',
		price: 1500,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 7,
		name: 'Glasses',
		src: 'gozluk',
		price: 2500,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 8,
		name: 'Watch 10',
		src: 'saat1',
		price: 2500,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 9,
		name: 'Wacth 15',
		src: 'saat2',
		price: 2500,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 10,
		name: 'Icecek',
		src: 'sise',
		price: 3300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 11,
		name: 'Phone 11',
		src: 'tel1',
		price: 2500,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	},
	{
		id: 12,
		name: 'Phone 14 Pro',
		src: 'tel2',
		price: 2400,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
	}
]

function App() {
	let [opened, setOpened] = useState(false)
	const [basketItems, setBasketItems] = useState([])
	let [searchString, setSercahString] = useState('')
	let filteredItems = storeItems.filter((item) => item.name.indexOf(searchString) >= 0)
	const handleAddToBasket = (id, item, count, name) => {
		let basketIndex = basketItems.findIndex((basketItem) => basketItem.id === id)
		if (basketIndex >= 0) {
			let basketItem = basketItems[basketIndex]
			basketItem.count += 1
			basketItems[basketIndex] = basketItem
			setBasketItems([...basketItems])
			return
		} else {
			setBasketItems([...basketItems, { ...item, count: 1, id }])
		}
	}

	return (
		<>
			<Container>
				<Group align="end" className="bar">
					<Input.Wrapper label="Search..." className="search">
						<Input
							value={searchString}
							onChange={(e) => {
								setSercahString(e.target.value)
							}}
						/>
					</Input.Wrapper>
					<Button color="red" onClick={() => setSercahString('')}>
						Clears
					</Button>
					<Indicator color="red" size={22} withBorder label={basketItems.length.toString()} className="end">
						<Button
							color="red"
							onClick={() => {
								setOpened(true)
							}}
						>
							<IconShoppingCart />
						</Button>
					</Indicator>
				</Group>
				<SimpleGrid cols={3}>
					{filteredItems.map((storeItem) => (
						<CardComponent key={storeItem.id} item={storeItem} src={storeItem.src} onAdd={handleAddToBasket} />
					))}
				</SimpleGrid>
				<Drawer
					opened={opened}
					onClose={() => setOpened(false)}
					title="Sepetim"
					size="sm"
					padding="md"
					overlayProps={{ opacity: 0.5, blur: 4 }}
				>
					<List className="list" spacing="s" size="sm" padding="md" center>
						{basketItems.map(({ name, count }, index) => (
							<List.Item key={index}>
								<span>{name}</span>
								<span> </span>
								<Badge>{count}</Badge>
								<br></br>
								<br></br>
							</List.Item>
						))}
					</List>
				</Drawer>
			</Container>
		</>
	)
}

export default App
