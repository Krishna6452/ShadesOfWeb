export const fetchCommunities = async () => {
    const response = await fetch('https://devsow.wpengine.com/wp-json/communities/all/', {
      method: 'GET',
      headers: {
        Authorization: 'Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU='
      }
    });
    const data = await response.json();
    return data;
  };
  