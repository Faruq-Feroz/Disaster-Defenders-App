const BlogPosts = () => {
  const posts = [
    {
      date: 'Nov 21',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuxPpP5C0vapl1bVsFwSCtYf8kkQ9R-oydQ&s',
      title: 'Tech Tools for Disaster Readiness',
      author: 'Maxwell',
      expertise: 'Developer',
      content:
        'Disasters can disrupt communication and access to information. Luckily, technology can be a powerful tool for preparedness. Here are some apps and resources to consider.',
      link: 'blog-details.html',
    },
    {
      date: 'Nov 20',
      imgSrc: 'https://www.regroup.com/wp-content/uploads/2022/10/disaster-blog-header.jpg',
      title: 'Essential Steps for Disaster Preparedness',
      author: 'Hassan Faruq',
      expertise: 'Expert',
      content:
        'Mother Nature can be unpredictable, but that doesn\'t mean you have to be caught off guard. Here are some crucial steps to take to ensure you\'re prepared for any disaster.',
      link: 'blog-details.html',
    },
    {
      date: 'Nov 22',
      imgSrc: 'https://i.pinimg.com/474x/83/0f/ad/830fade934fb7fdccfab6980a4bd0988.jpg',
      title: 'A Guide to Responding to Disaster Alerts.',
      author: 'Jane Njeri',
      expertise: 'Expert',
      content:
        'Hearing an emergency siren can be nerve-wracking, but knowing how to respond is crucial. Here\'s what to do when a disaster alert is issued.',
      link: 'blog-details.html',
    },
    {
      date: 'Nov 19',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1Ap7Lb58P_4-02jx4GgrOVwUUH7XuSll_w&s',
      title: 'Effective Strategies for Disaster Recovery',
      author: 'Joseph Ochieng\'',
      expertise: 'Expert',
      content:
        'The aftermath of a disaster can be overwhelming. Here are some strategies to navigate the recovery process effectively.',
      link: 'blog-details.html',
    },
    {
      date: 'Nov 18',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxo_33FTLkelFAWQYgL1yES5pgVJS97yKtIg&s',
      title: 'Making Your Home Disaster-Resilient',
      author: 'John Gashie',
      expertise: 'Expert',
      content:
        'Disasters can be devastating, but there are steps you can take to make your home more resilient. Consider these strategies.',
      link: 'blog-details.html',
    },
    {
      date: 'Nov 22',
      imgSrc: 'https://www.rcce-collective.net/wp-content/uploads/2024/04/56d800a9-3941-489e-8959-db56740ee785-1080x660.jpeg',
      title: 'Community Preparedness for a Collective Response',
      author: 'Edwin Mark',
      expertise: 'Expert',
      content:
        'Disaster preparedness isn\'t just about individual households. Building a strong community response system is crucial. Here\'s how your community can prepare.',
      link: 'blog-details.html',
    },
  ];

  return (
    <section id="blog-posts" className="blog-posts">
      <div className="container">
        {posts.map((post, index) => (
          <article key={index} className="post-card">
            <div className="post-img">
              <img src={post.imgSrc} alt={post.title} />
              <span className="post-date">{post.date}</span>
            </div>
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <div className="meta">
                <span className="author-expertise">
                  {post.author} / {post.expertise}
                </span>
              </div>
              <p>{post.content}</p>
              <hr />
              <a href={post.link} className="readmore">
                <span>Read More</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
