import React from 'react';
import './JsonComponent.css';

const tasks = [
  {
    id: 'unique_id_001',
    createDate: '5/19/2024',
    subtitle: 'Subtitle',
    tags: [
      {
        id: 'tag_001',
        text: 'its done',
        icon: 'D',
      },
      {
        id: 'tag_002',
        text: 'its complete',
        icon: 'C',
      },
      {
        id: 'tag_003',
        text: 'Its is progress',
        icon: 'P',
      },
      {
        id: 'tag_004',
        text: 'Just finished',
        icon: 'F',
      },
    ],
    comments: [
      {
        id: 'comment_id_001',
        user: {
          avatar: 'xyz.png',
          name: 'Aman',
          id: 'user_id_001',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
    tasks: [
      {
        id: 'task_001',
        title: 'Foggy Nelson',
        text: 'Here to clean the students heads kitchen',
        status: 'demo',
      },
      {
        id: 'task_002',
        title: 'Lenis KC',
        text: 'Here to clean the students heads kitchen',
        status: 'cancelled',
      },
      {
        id: 'task_003',
        title: 'Albert Einstein',
        text: 'Here to clean the students heads kitchen',
        status: 'done',
      },
      {
        id: 'task_004',
        title: 'Nelson',
        text: 'Here to clean the students heads kitchen',
        status: 'progress',
      },
    ],
  },
  {
    id: 'unique_id_001',
    createDate: '5/19/2024',
    subtitle: 'Subtitle',
    tags: [
      {
        id: 'tag_001',
        text: 'its done',
        icon: 'D',
      },
      {
        id: 'tag_002',
        text: 'its complete',
        icon: 'C',
      },
      {
        id: 'tag_003',
        text: 'Its is progress',
        icon: 'P',
      },
      {
        id: 'tag_004',
        text: 'Just finished',
        icon: 'F',
      },
    ],
    comments: [
      {
        id: 'comment_id_001',
        user: {
          avatar: 'xyz.png',
          name: 'Aman',
          id: 'user_id_001',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
    tasks: [
      {
        id: 'task_001',
        title: 'Foggy Nelson',
        text: 'Here to clean the students heads kitchen',
        status: 'demo',
      },
      {
        id: 'task_002',
        title: 'Lenis KC',
        text: 'Here to clean the students heads kitchen',
        status: 'cancelled',
      },
      {
        id: 'task_003',
        title: 'Albert Einstein',
        text: 'Here to clean the students heads kitchen',
        status: 'done',
      },
      {
        id: 'task_004',
        title: 'Nelson',
        text: 'Here to clean the students heads kitchen',
        status: 'progress',
      },
    ],
  },
  {
    id: 'unique_id_001',
    createDate: '5/19/2024',
    subtitle: 'Subtitle',
    tags: [
      {
        id: 'tag_001',
        text: 'its done',
        icon: 'D',
      },
      {
        id: 'tag_002',
        text: 'its complete',
        icon: 'C',
      },
      {
        id: 'tag_003',
        text: 'Its is progress',
        icon: 'P',
      },
      {
        id: 'tag_004',
        text: 'Just finished',
        icon: 'F',
      },
    ],
    comments: [
      {
        id: 'comment_id_001',
        user: {
          avatar: 'xyz.png',
          name: 'Aman',
          id: 'user_id_001',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
    tasks: [
      {
        id: 'task_001',
        title: 'Foggy Nelson',
        text: 'Here to clean the students heads kitchen',
        status: 'demo',
      },
      {
        id: 'task_002',
        title: 'Lenis KC',
        text: 'Here to clean the students heads kitchen',
        status: 'cancelled',
      },
      {
        id: 'task_003',
        title: 'Albert Einstein',
        text: 'Here to clean the students heads kitchen',
        status: 'done',
      },
      {
        id: 'task_004',
        title: 'Nelson',
        text: 'Here to clean the students heads kitchen',
        status: 'progress',
      },
    ],
  },
];

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'Friday',
    'Saturday',
    'sunday',
  ];
  return days[date];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const TagListItem = ({ tag }) => {
  return (
    <li key={tag.id}>
      <small>{tag.text}</small> - <small>{tag.text}</small>
    </li>
  );
};

const TaskListItem = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>
        <small>{task.status}</small>
      </p>
      <p>{task.text}</p>
    </div>
  );
};

const CommentListItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <h3>{comment.user.name}</h3>
      <p>{comment.text}</p>
    </div>
  );
};

const TaskCard = ({ task }) => {
  return (
    <div className="day-card">
      <h1 className="title">
        {getDay(task.createDate)}, {formatDate(task.createDate)}
      </h1>
      <h3 className="subtitle">{task.subtitle}</h3>
      <ul className="tag-ul">
        {task.tags.map((tag) => (
          <TagListItem key={tag.id} tag={tag} />
        ))}
      </ul>
      <div className="line"></div>
      <p className="notes">Notes link in people</p>
      <div className="comments">
        {task.comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>
      <ul className="tasks">
        {task.tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const JsonComponent = () => {
  return (
    <div className='cards-group'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default JsonComponent;
