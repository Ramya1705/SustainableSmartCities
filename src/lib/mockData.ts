export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Reported' | 'Under Review' | 'In Progress' | 'Resolved';
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  images: string[];
  reportedBy: string;
  reportedAt: string;
  updatedAt: string;
  votes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
}

export const categories = [
  'Road & Infrastructure',
  'Street Lighting',
  'Public Safety',
  'Waste Management',
  'Water & Utilities',
  'Parks & Recreation',
  'Traffic & Transportation',
  'Other'
];

export const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Large pothole on Main Street',
    description: 'There is a significant pothole on Main Street near the intersection with Oak Avenue. It\'s causing damage to vehicles and is a safety hazard.',
    category: 'Road & Infrastructure',
    severity: 'High',
    status: 'In Progress',
    location: {
      address: '123 Main Street, Downtown',
      lat: 40.7128,
      lng: -74.0060
    },
    images: ['/placeholder.svg', '/placeholder.svg'],
    reportedBy: 'Sarah Johnson',
    reportedAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:15:00Z',
    votes: 15,
    comments: [
      {
        id: 'c1',
        author: 'Mike Chen',
        content: 'I hit this pothole yesterday and damaged my tire. This needs immediate attention!',
        timestamp: '2024-01-16T09:20:00Z'
      },
      {
        id: 'c2',
        author: 'City Works Dept',
        content: 'Thank you for reporting this issue. We have scheduled repairs for next week.',
        timestamp: '2024-01-18T11:45:00Z'
      }
    ]
  },
  {
    id: '2',
    title: 'Broken streetlight on Elm Street',
    description: 'The streetlight at the corner of Elm Street and 2nd Avenue has been flickering for weeks and now appears to be completely out.',
    category: 'Street Lighting',
    severity: 'Medium',
    status: 'Under Review',
    location: {
      address: '456 Elm Street, Riverside',
      lat: 40.7589,
      lng: -73.9851
    },
    images: ['/placeholder.svg'],
    reportedBy: 'Robert Martinez',
    reportedAt: '2024-01-18T19:45:00Z',
    updatedAt: '2024-01-19T08:30:00Z',
    votes: 8,
    comments: [
      {
        id: 'c3',
        author: 'Lisa Wang',
        content: 'This area is very dark at night. Safety concern for pedestrians.',
        timestamp: '2024-01-19T07:15:00Z'
      }
    ]
  },
  {
    id: '3',
    title: 'Overflowing trash bins in Central Park',
    description: 'Multiple trash bins in the central area of the park are overflowing. There\'s litter scattered around and it\'s attracting pests.',
    category: 'Waste Management',
    severity: 'Medium',
    status: 'Reported',
    location: {
      address: 'Central Park, Recreation Area',
      lat: 40.7829,
      lng: -73.9654
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    reportedBy: 'Emily Davis',
    reportedAt: '2024-01-20T12:15:00Z',
    updatedAt: '2024-01-20T12:15:00Z',
    votes: 12,
    comments: []
  },
  {
    id: '4',
    title: 'Water main break on Pine Avenue',
    description: 'Large water main break causing flooding and road closure. Water pressure is low in surrounding area.',
    category: 'Water & Utilities',
    severity: 'Critical',
    status: 'In Progress',
    location: {
      address: '789 Pine Avenue, Westside',
      lat: 40.7505,
      lng: -73.9934
    },
    images: ['/placeholder.svg'],
    reportedBy: 'David Kim',
    reportedAt: '2024-01-21T06:30:00Z',
    updatedAt: '2024-01-21T08:00:00Z',
    votes: 25,
    comments: [
      {
        id: 'c4',
        author: 'Emergency Services',
        content: 'Emergency crews are on site. Road will remain closed until repairs are complete.',
        timestamp: '2024-01-21T07:45:00Z'
      }
    ]
  },
  {
    id: '5',
    title: 'Vandalized bus stop shelter',
    description: 'Bus stop shelter on Commerce Street has been vandalized with graffiti and one of the glass panels is broken.',
    category: 'Public Safety',
    severity: 'Low',
    status: 'Resolved',
    location: {
      address: '321 Commerce Street, Business District',
      lat: 40.7282,
      lng: -74.0776
    },
    images: ['/placeholder.svg'],
    reportedBy: 'Jennifer Lopez',
    reportedAt: '2024-01-10T16:20:00Z',
    updatedAt: '2024-01-22T10:30:00Z',
    votes: 6,
    comments: [
      {
        id: 'c5',
        author: 'Maintenance Team',
        content: 'Shelter has been cleaned and glass panel replaced. Thank you for the report!',
        timestamp: '2024-01-22T10:30:00Z'
      }
    ]
  }
];

export const getIssueById = (id: string): Issue | undefined => {
  return mockIssues.find(issue => issue.id === id);
};

export const getIssuesByStatus = (status: Issue['status']): Issue[] => {
  return mockIssues.filter(issue => issue.status === status);
};

export const getIssuesByCategory = (category: string): Issue[] => {
  return mockIssues.filter(issue => issue.category === category);
};