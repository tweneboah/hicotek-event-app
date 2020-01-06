import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                    <Header as='h1' inverted>
                        <Image
                            size='massive'
                            src='/assets/images/logo.png'
                            alt='logo'
                            style={{ marginBottom: 12 }}
                        />
                        Re-vents
                  </Header>
                    <Button size='huge' inverted>
                        <Link to='/events'>Get started</Link>
                        <Icon name='right arrow' inverted />
                    </Button>
                </Container>
            </Segment>
        </div>
    );
}

export default HomePage;
