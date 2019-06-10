/*eslint-disable*/
import React from 'react'
import Aside from '../../Elements/Aside'
import { TaskItem, TaskStatus } from 'smbc-react-components'

const StatusElements = () => {

	return (
		<main id="content">
			<article>
				<section>
					<h1>Status Elements</h1>
					<section>
						<h2>Task Item</h2>
						<TaskItem
							body= {() => {
								return <p>Body element of the task</p>
							}}
							status={TaskStatus.Completed}
							title={'1. First task'}
						/>
					</section>
				</section>
			</article>
			<Aside />
		</main>
	)
}

export default StatusElements