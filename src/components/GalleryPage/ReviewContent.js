import React, { useState, useEffect } from 'react';

const names = [
  
  'DJ Mike is easy to work with. Everyone was on the dance floor! Excellent service with songs tailored to the crowd, from the entrance clips to the final song.',

  'People are still talking about how fun our wedding was! Made our wedding night one to remember!',

  'If you want a DJ that will be in sync with the vision of how you want your event to feel and sound, DJ Mike will exceed your expectations.',

  'DJ Mike is easy to work with. Everyone was on the dance floor! Excellent service with songs tailored to the crowd, from the entrance clips to the final song. People are still talking about how fun our wedding was! Made our wedding night one to remember',

  'DJ Mike is the only DJ we recommend to our brides at 2616 Commerce Event Center. He is very professional and has years of experience as a wedding DJ. Our brides are always very happy with him. He is a great DJ for any event you may be planning!',

  'The evening felt like a party. Mike kept the pace of the evening going, the music was perfect! Many attendees kept mentioning how great the DJ was and how much fun they had. I don’t know that I have ever been to an event where the DJ gets 3 rounds of applause. The school advancement director and the president were quite pleased and look to book Mike for his services at the alumni event at homecoming Oct 2015. Great job!!! 5 stars!!',

  'GREAT!!!! Always had music playing and people dancing. It was a joy to watch my family have such an Amazing time. It was an unforgettable memory that my family and I will cherish forever!',

  'DJ Mike was awesome he kept our party dancing all night!! All of the guests expressed how much they enjoyed his DJing!! We had an issue the day of our event with sending our Photo Slideshow. The file was too large. Of course, we are freaking out we called him at least 5 times about the issue. Lol. He answered ever call talking us through the issue. He even brought an additional speaker as a last resort to make sure we were able to have our slideshow!! I highly recommend him!! I’m a lifetime customer!',

  'DJ Mike is the only DJ we recommend to our brides at 2616 Commerce Event Center. He is very professional and has years of experience as a wedding DJ. Our brides are always very happy with him. He is a great DJ for any event you may be planning!',

  'DJ Mike was great! Our program was a success and the dance party after...'
]

function ReviewContent() {

  
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index === names.length - 1) return
    setTimeout(() => {
      setIndex(index + 1)
    }, 4000);
  }, [index])


  return (
    
    <div>
      <p style={{textAlign:"center", fontStyle:"italic", fontSize:"20px", color:"black", fontWeight:"lighter"}}><q>{names[index]}</q></p>
    </div>
  )
}

export default ReviewContent;