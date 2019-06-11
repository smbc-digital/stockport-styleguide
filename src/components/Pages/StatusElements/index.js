/*eslint-disable*/
import React, { Fragment } from 'react'
import Aside from '../../Elements/Aside'
import { TaskItem, TaskStatus } from 'smbc-react-components'

const StatusElements = () => {

	return (
		<main id="content">
			<article className='with-aside'>
				<section>
					<h1>Status Elements</h1>
					<section>
						<h2>Task Item</h2>
						<ol className='task-item-list'>
							<li>
								<TaskItem
									body={() => {
										return <p>Let's build an almighty mountain. You have to make those little noises or it won't work. Just think about these things in your mind and drop em' on canvas.</p>
									}}
									status={TaskStatus.Completed}
									title={'Completed task'}
								/>
							</li>
							<li>
								<TaskItem
									body={() => {
										return <p>Every day I learn. Absolutely no pressure. You are just a whisper floating across a mountain. You've got to learn to fight the temptation to resist these things. Just let them happen. Use your imagination, let it go. We need dark in order to show light. If it's not what you want - stop and change it. Don't just keep going and expect it will get better.</p>
									}}
									status={TaskStatus.NotCompleted}
									title={'Not completed task'}
								/>
							</li>
							<li>
								<TaskItem
									body={() => {
										return <p>Maybe we got a few little happy bushes here, just covered with snow. There he comes. They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics. It's a super day, so why not make a beautiful sky?</p>
									}}
									status={TaskStatus.CantStart}
									title={'Cant start task'}
								/>
							</li>
							<li>
								<TaskItem
									body={() => {
										return (
											<Fragment>
												<p>That's the way I look when I get home late; black and blue. It's so important to do something every day that will make you happy. Let's put a touch more of the magic here. Isn't that fantastic that you can create an almighty tree that fast? This is your world.
												</p>
												<div className='anchor-with-status'>
													<a href='#'>I am a link without a status</a>
												</div>
												<div className='anchor-with-status'>
													<a href='#'>I am a link with a status</a>
													<span class="status-completed">Completed</span>
												</div>
												<div className='anchor-with-status'>
													<a href='#'>I am also a link with a status</a>
													<span class="status-not-completed">Not Completed</span>
												</div>
											</Fragment>
										)
									}}
									status={TaskStatus.None}
									title={'Status none task'}
								/>
							</li>
							<li className='disabled'>
								<TaskItem
									body={() => {
										return (
											<Fragment>
												<p>That's the way I look when I get home late; black and blue. It's so important to do something every day that will make you happy. Let's put a touch more of the magic here. Isn't that fantastic that you can create an almighty tree that fast? This is your world.</p>
											</Fragment>
										)
									}}
									status={TaskStatus.CantStart}
									title={'Disabled task'}
								/>
								<hr />
							</li>
						</ol>
						<TaskItem
							body={() => {
								return <p>That's the way I look when I get home late; black and blue. It's so important to do something every day that will make you happy. Let's put a touch more of the magic here. Isn't that fantastic that you can create an almighty tree that fast? This is your world.</p>
							}}
							status={TaskStatus.Completed}
							title={'Not part of a list task item'}
						/>
					</section>
				</section>
			</article>
			<Aside />
		</main>
	)
}

export default StatusElements