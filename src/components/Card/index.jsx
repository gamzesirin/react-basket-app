import './style.css'

import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'

const CardComponent = ({ item, onAdd, src }) => {
	const { name } = item

	return (
		<>
			<Card shadow="sm" padding="lg" radius="md" withBorder>
				<Card.Section>
					<Image src={`/assets/images/${src}.jpg`} height={160} alt="Norway" className="img" />
				</Card.Section>

				<Group position="apart" mt="md" mb="xs">
					<Text weight={500}>{name}</Text>
				</Group>

				<Badge size="sm" color="red">
					{item.price} TL
				</Badge>

				<Text size="sm" color="dimmed">
					{item.desc}
				</Text>

				<Button
					variant="light"
					color="red"
					fullWidth
					mt="md"
					radius="md"
					onClick={() => onAdd(item.id, item, 1, item.name)}
				>
					Ekle
				</Button>
			</Card>
		</>
	)
}

export default CardComponent
