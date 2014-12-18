var bio = {
  "name": 'Jason Zhai',
  "role": 'Web Developer',
  "contacts": {
      "email": "jsmzhai@gmail.com",
      "github": "https://github.com/JasonZ15",
      "twitter": "http://instagram.com/jason_zhai",
      "location": "San Francisco Bay Area"
  },
  "welcomeMessage": "I have years of graphic & web design experience. And I recently finished master program in DA in CS and online course for web development. I've worked in beijing for 5 years and US for 2 years",
  "skills": ["HTML", "CSS", "JavaScript", "Web Development", "Web Design", "Graphic Design", "UI/UX Design", "3D Modeling and Rigging"],
  "biopic": "images/profile.jpg",
  "display": function() {
    $('#header').append(HTMLbioPic.replace('%data%', this['biopic']))
                .prepend(HTMLheaderRole.replace('%data%', this['role']))
                .prepend(HTMLheaderName.replace('%data%', this['name']))
                .append(HTMLWelcomeMsg.replace('%data%', this['welcomeMessage']))
                .append(HTMLskillsStart);

    //contacts
    for(var key in this.contacts) {
      $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', key).replace('%data%', this['contacts'][key]));
    };

    //skills
    for(var i = 0; i < this.skills.length; i++) {
      $('#skills').append(HTMLskills.replace('%data%', this['skills'][i]));
    };
  }
}; //bio

var work = {
  "jobs": [
  {
    "employer": "GWC Global",
    "url": "http://en.gwc.net",
    "title": "Design Manager",
    "location": "Mountain View, USA",
    "dates worked": "August 2012 - Present",
    "description": "I am the Design Manager for GMIC, the largest mobile conference in Beijing and Silicon Valley. He is responsible for creating all of the visual elements cross different medias from print to digital. These designs are core assets for building and promoting the conference's brand."
  }, {
    "employer": "GWC China",
    "url": "http://en.gwc.net",
    "title": "Graphic Designer",
    "location": "Beijing, China",
    "dates worked": "March 2011 - August 2012",
    "description": "Work closely with marketing manager on the full range of design projects: datasheets, infographics, HTML emails, standing banners, flyers, website landing pages, banner advertising, and more. Build modern, elegant and engaging web experience across multiple devices and platforms. Turning your designs into the final product using HTML, CSS, javascript and Wordpress, with an emphasis on responsive web design. "
  }, {
    "employer": "A Bridge for Children International",
    "url": "http://www.abridgeforchildren.org",
    "title": "Graphic Designer & Web Admin",
    "location": "Beijing, China",
    "dates worked": "October 2007 - March 2011",
    "description": "Create communications and marketing print materials, digital assets and templates. Manage web design and site updates (WordPress) including website design, site blog releases, UI/UX, functionality, copy, IA, and implementation."
  }
  ],
  "display": function() {
    for(var i=0; i < work.jobs.length; i++) {
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry').eq(i).append(HTMLworkEmployer.replace('%data%', work.jobs[i]['employer'])
      .replace('#', work.jobs[i]['url'])
      + HTMLworkTitle.replace('%data%', work.jobs[i]['title']))
      .append(HTMLworkLocation.replace('%data%', work.jobs[i]['location']))
      .append(HTMLworkDates.replace('%data%', work.jobs[i]['dates worked']))
      .append(HTMLworkDescription.replace('%data%', work.jobs[i]['description']));
    };
  }
}; //work

var projects = {
  "project": [
    {
      "title": '"Global Mobile Internet Conference" Stage Design',
      "url": "https://www.facebook.com/media/set/?set=a.559496534124316.1073741834.160565670684073&type=3",
      "dates worked": "October 2013",
      "description": "GMIC is Silicon Valley's largest annual mobile conference and expo. October 21 2013, GMIC was held at the Moscone Center in San Francisco. It attracted 10,000+ mobile industry participants, including top executives, entrepreneurs, developers, and investors from over 60 countries",
      "images": ["images/project-1.jpg", "images/project-2.jpg", "images/project-3.jpg"]
    }, {
      "title": '"Global Mobile Internet Conference" Website Design and Development',
      "url": "http://www.thegmic.com",
      "dates worked": "March 2013",
      "description": "Create professional, attractive, and engaging UI/UX presence through GMIC's online communications. Apply best practices for both visual design and technical implementation of pieces such as HTML emails and web pages.",
      "images": ["images/project2-1.jpg", "images/project2-2.jpg", "images/project2-3.jpg"]
    }, {
      "title": '"Sunland Law Firm" Logo Design',
      "url": "http://www.sunlandlaw.com/",
      "dates worked": "October 2011",
      "description": "Sunland has been helping and guiding his clients from start-up stages to raising funds in major capital markets, including some of the leaders in the Technology, Multimedia and Telecommunications sector in China.",
      "images": ["images/project3.jpg"]
    }
  ],
  "display": function() {
    for(var i=0; i < projects.project.length; i++) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry').eq(i).append(HTMLprojectTitle.replace('%data%', projects.project[i]['title'])
                                .replace('#', projects.project[i]['url']))
                               .append(HTMLprojectDates.replace('%data%', projects.project[i]['dates worked']))
                               .append(HTMLprojectDescription.replace('%data%', projects.project[i]['description']));
      for(var j=0; j<projects.project[i]['images'].length; j++) {
        $('.project-entry').eq(i).append(HTMLprojectImage.replace('%data%', projects.project[i]['images'][j]));
      }
    };
  }
};

var education = {
  "schools": [
    {
      "name": "International Technological University",
      "location": "San Jose",
      "degree": "Master in Computer Science",
      "majors": ["Digital Arts"],
      "dates attended": "2013",
      "url": "http://itu.edu"
    },
    {
      "name": "China Agriculture University",
      "location": "Beijing",
      "degree": "Master in Engineering",
      "majors": ["Industrial Design"],
      "dates attended": "2003",
      "url": "http://cau.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates attended": "2014",
      "url": "https://www.udacity.com/course/nd001"
    }
  ],
  "display": function() {
    for(var i=0; i < education.schools.length; i++) {
      $('#education').append(HTMLschoolStart);
    };
    $('.education-entry').each(function(i) {
      $(this).append(HTMLschoolLocation.replace('%data%', education.schools[i]['location']))
             .append(HTMLschoolName.replace('%data%', education.schools[i]['name'])
              .replace('#', education.schools[i]['url'])
              + HTMLschoolDegree.replace('%data%', education.schools[i]['degree']))
             .append(HTMLschoolDates.replace('%data%', education.schools[i]['dates attended']))
             .append(HTMLschoolMajor.replace('%data%', education.schools[i]['majors'].join(', ')));
    });
    for(var i=0; i < education.onlineCourses.length; i++) {
      $('#education').append(HTMLonlineClasses).append(HTMLschoolStart);
    };
    $('#education h3').nextAll().each(function(i) {
      $(this).append(HTMLonlineTitle.replace('%data%', education.onlineCourses[i]['title'])
             .replace('#', education.onlineCourses[i]['url'])
             + HTMLonlineSchool.replace('%data%', education.onlineCourses[i]['school']))
             .append(HTMLonlineDates.replace('%data%', education.onlineCourses[i]['dates attended']))
             .append(HTMLonlineURL.replace(/%data%|#/g, education.onlineCourses[i]['url']));
    });
  }
};// education

work.display();
projects.display();
bio.display();
education.display();

$('#mapDiv').append(googleMap);
$(function(){
  initializeMap();
});
