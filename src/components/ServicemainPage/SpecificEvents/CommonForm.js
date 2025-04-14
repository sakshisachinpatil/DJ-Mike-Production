import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: black;
  color: white;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  background: white;
  color: black;
  border: 1px solid #555;
  border-radius: 5px;
`;

const TwoColumnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${FormGroup} {
    flex: 0 0 48%;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxWrapper = styled.div`
  width: calc(100% / 3 - 10px); /* Three columns with some space between */
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: calc(100% / 2 - 10px); /* Two columns for tablets and small screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Single column for phones */
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9em; /* Smaller font size */
  text-transform: lowercase;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  display: block;
  width: auto;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CommonForm = () => {
  const [formData, setFormData] = useState({
    eventChoice: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    guestCount: '',
    budget: '',
    insuranceRequired: 'No',
    additionalServices: [],
    needMonogram: 'No',
    needUpLighting: 'No',
    ownMC: 'No',
    bandPerforming: 'No',
    musicDislike: '',
    radioEdited: 'Both',
    planner: 'No',
    planningAssistance: '',
    itinerary: 'No',
    musicGenres: [],
    otherMusicStyle: '',
    specialRequest: '',
    eventType: '',
    howHeard: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'additionalServices' || name === 'musicGenres') {
        const newValues = checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value);
        setFormData({ ...formData, [name]: newValues });
      }
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const resetForm = () => {
    setFormData({
      eventChoice: '',
      description: '',
      eventDate: '',
      startTime: '',
      endTime: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      guestCount: '',
      budget: '',
      insuranceRequired: 'No',
      additionalServices: [],
      needMonogram: 'No',
      needUpLighting: 'No',
      ownMC: 'No',
      bandPerforming: 'No',
      musicDislike: '',
      radioEdited: 'Both',
      planner: 'No',
      planningAssistance: '',
      itinerary: 'No',
      musicGenres: [],
      otherMusicStyle: '',
      specialRequest: '',
      eventType: '',
      howHeard: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log form data to the console
    console.log('Form Data:', formData);
  
    // Show a popup message
    alert('Form submitted successfully!');
    
    // Reset the form
    resetForm();
  };
  
  const musicGenres = [
    'Acid Jazz', 'Cumbia', 'Hip Hop / Rap', 'Motown', 'Reggae', 'Alternative Music', 'Dancehall',
    'Holiday Music (Christmas)', 'Neo Soul', 'Reggaeton', 'Ambient', 'Dance Music', 'House', 'New Age',
    'Rock', 'Asian Pop (J-Pop, K-pop)', 'Disco', 'Indian Ghazal', 'New Jack Swing', 'Salsa', 'Bachata',
    'Dubstep', 'Indie Pop', 'Norteno', 'Singer (inc. Folk)', 'Banda', 'Duranguense', 'Indie Rock', 
    'Old School Rap', 'Soca', 'Blues', 'Easy Listening', 'Inspirational (incl. Gospel)', 'Opera', 
    'Swing Out Music', 'Bollywood', 'EDM', 'Jazz', 'Polka', 'Techno', 'Brazilian', 'Electronic Music',
    'Latin Music', 'Pop (Popular music)', 'Tejano', 'Classical Music', 'European Music (Folk/Pop)', 
    'Lounge', 'Quiet Storm', 'Trance', 'Classic Rock', 'Funk', 'Mariachi', 'Ranchera', 'World Music / Beats',
    'Country Music', 'Hard Rock', 'Merengue', 'R&B / Soul', 'Zydeco'
  ];

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {/* Form fields (same as before) */}
        <FormGroup>
          <Label>Select the Event of your choice</Label>
          <Input type="text" name="eventChoice" placeholder="Enter Event of your choice" value={formData.eventChoice} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <Input type="text" name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>DATE OF EVENT</Label>
          <Input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
        </FormGroup>

        <TwoColumnGroup>
          <FormGroup>
            <Label>START TIME</Label>
            <Input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>END TIME</Label>
            <Input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
          </FormGroup>
        </TwoColumnGroup>

        <FormGroup>
          <Label>Location Of Event</Label>
        </FormGroup>

        <TwoColumnGroup>
          <FormGroup>
            <Label>STREET ADDRESS</Label>
            <Input type="text" name="streetAddress" placeholder="Enter your address" value={formData.streetAddress} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>CITY</Label>
            <Input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} />
          </FormGroup>
        </TwoColumnGroup>

        <TwoColumnGroup>
          <FormGroup>
            <Label>STATE</Label>
            <Input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>ZIP</Label>
            <Input type="text" name="zip" placeholder="Enter your zip code" value={formData.zip} onChange={handleChange} />
          </FormGroup>
        </TwoColumnGroup>

        <FormGroup>
          <Label>Country</Label>
          <Input type="text" name="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>ESTIMATED GUEST COUNT</Label>
          <Input type="number" name="guestCount" placeholder="Enter your estimated guest count" value={formData.guestCount} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>EVENT BUDGET</Label>
          <Input type="number" name="budget" placeholder="Enter your event budget" value={formData.budget} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Insurance Required?</Label>
          <CheckboxGroup>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="insuranceRequired" value="Yes" checked={formData.insuranceRequired === 'Yes'} onChange={handleChange} />
                Yes
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="insuranceRequired" value="No" checked={formData.insuranceRequired === 'No'} onChange={handleChange} />
                No
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxGroup>
        </FormGroup>



        <FormGroup>
          <Label>Additional Services (There is an additionalServices cost for this items)</Label>
          <CheckboxGroup>

          <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="Photo Booth"
          checked={formData.additionalServices.includes('Photo Booth')}
          onChange={handleChange}
        />
        Photo Booth
      </CheckboxLabel>
    </CheckboxWrapper>
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="CO2 Gun Blaster"
          checked={formData.additionalServices.includes('CO2 Gun Blaster')}
          onChange={handleChange}
        />
        CO2 Gun Blaster
      </CheckboxLabel>
    </CheckboxWrapper>
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="Print Photo Booth"
          checked={formData.additionalServices.includes('Print Photo Booth')}
          onChange={handleChange}
        />
        Print Photo Booth
      </CheckboxLabel>
    </CheckboxWrapper>
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="Dance Floor 15x15"
          checked={formData.additionalServices.includes('Dance Floor 15x15')}
          onChange={handleChange}
        />
        Dance Floor 15x15
      </CheckboxLabel>
    </CheckboxWrapper>
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="360 Video Booth"
          checked={formData.additionalServices.includes('360 Video Booth')}
          onChange={handleChange}
        />
        360 Video Booth
      </CheckboxLabel>
    </CheckboxWrapper>
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="Live Stream"
          checked={formData.additionalServices.includes('Live Stream')}
          onChange={handleChange}
        />
        Live Stream
      </CheckboxLabel>
    </CheckboxWrapper>
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="Dancing in the Clouds"
          checked={formData.additionalServices.includes('Dancing in the Clouds')}
          onChange={handleChange}
        />
        Dancing in the Clouds
      </CheckboxLabel>
    </CheckboxWrapper>
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          name="additionalServices"
          value="50-inch TVs"
          checked={formData.additionalServices.includes('50-inch TVs')}
          onChange={handleChange}
        />
        50-inch TVs
      </CheckboxLabel>
    </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" name="additionalServices" value="Monogram" checked={formData.additionalServices.includes('Monogram')} onChange={handleChange} />
                Monogram
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" name="additionalServices" value="UpLighting" checked={formData.additionalServices.includes('UpLighting')} onChange={handleChange} />
                UpLighting
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" name="additionalServices" value="MC" checked={formData.additionalServices.includes('MC')} onChange={handleChange} />
                MC
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" name="additionalServices" value="Band" checked={formData.additionalServices.includes('Band')} onChange={handleChange} />
                Band
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxGroup>
        </FormGroup>

        <FormGroup>
          <Label>Will the band be performing?</Label>
          <CheckboxGroup>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="bandPerforming" value="Yes" checked={formData.bandPerforming === 'Yes'} onChange={handleChange} />
                Yes
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="bandPerforming" value="No" checked={formData.bandPerforming === 'No'} onChange={handleChange} />
                No
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxGroup>
        </FormGroup>

        <FormGroup>
          <Label>Are there any special music styles you dislike?</Label>
          <Input type="text" name="musicDislike" placeholder="Enter music styles you dislike" value={formData.musicDislike} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Which radio edited do you prefer?</Label>
          <CheckboxGroup>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="radioEdited" value="Yes" checked={formData.radioEdited === 'Yes'} onChange={handleChange} />
                Yes
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="radioEdited" value="No" checked={formData.radioEdited === 'No'} onChange={handleChange} />
                No
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="radioEdited" value="Both" checked={formData.radioEdited === 'Both'} onChange={handleChange} />
                Both
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxGroup>
        </FormGroup>

        <FormGroup>
          <Label>Do You Have A Planner?</Label>
          <CheckboxGroup>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="planner" value="Yes" checked={formData.planner === 'Yes'} onChange={handleChange} />
                Yes
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="planner" value="No" checked={formData.planner === 'No'} onChange={handleChange} />
                No
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxGroup>
        </FormGroup>

        <FormGroup>
          <Label>If Yes, do you need planning assistance?</Label>
          <Input type="text" name="planningAssistance" placeholder="Enter your planning assistance needs" value={formData.planningAssistance} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Do You Have An Itinerary?</Label>
          <CheckboxGroup>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="itinerary" value="Yes" checked={formData.itinerary === 'Yes'} onChange={handleChange} />
                Yes
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="itinerary" value="No" checked={formData.itinerary === 'No'} onChange={handleChange} />
                No
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxGroup>
        </FormGroup>

        <FormGroup>
          <Label>Music Genres</Label>
          <CheckboxGroup>
            {musicGenres.map((genre) => (
              <CheckboxWrapper key={genre}>
                <CheckboxLabel>
                  <CheckboxInput type="checkbox" name="musicGenres" value={genre} checked={formData.musicGenres.includes(genre)} onChange={handleChange} />
                  {genre}
                </CheckboxLabel>
              </CheckboxWrapper>
            ))}
          </CheckboxGroup>
        </FormGroup>

        <FormGroup>
          <Label>If There Is A Style Of Music We Did Not List Please List Here.</Label>
          <Input type="text" name="otherMusicStyle" placeholder="Enter other music styles" value={formData.otherMusicStyle} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Special Request</Label>
          <Input type="text" name="specialRequest" placeholder="Enter any special requests" value={formData.specialRequest} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Event Type</Label>
          <CheckboxGroup>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="eventType" value="AM" checked={formData.eventType === 'AM'} onChange={handleChange} />
                AM
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="eventType" value="PM" checked={formData.eventType === 'PM'} onChange={handleChange} />
                PM
              </CheckboxLabel>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <CheckboxLabel>
                <CheckboxInput type="radio" name="eventType" value="Both" checked={formData.eventType === 'Both'} onChange={handleChange} />
                Both
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxGroup>
        </FormGroup>

        <FormGroup>
          <Label>How Did You Hear About Us?</Label>
          <Input type="text" name="howHeard" placeholder="Enter how you heard about us" value={formData.howHeard} onChange={handleChange} />
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CommonForm;
