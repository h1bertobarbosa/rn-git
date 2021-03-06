import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Author,
  Title,
} from './styles';

export default class User extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    page: 1,
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const response = await api.get(
      `/users/${user.login}/starred?per_page=5&page=1`
    );

    this.setState({ stars: response.data });
  }

  async handlePaginate(user) {
    const { page } = this.state;
    const pageCount = page + 1;
    const response = await api.get(
      `/users/${user.login}/starred?per_page=5?page=${pageCount}`
    );

    this.setState({ stars: response.data, page: pageCount });
  }

  handleNavigate = (repository) => {
    console.tron.log(repository);
    const { navigation } = this.props;
    navigation.navigate('RepositoryUser', { repository });
  };

  render() {
    const { navigation } = this.props;
    const { stars } = this.state;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <Stars
          onEndReachedThreshold={0.2}
          onEndReached={() => this.handlePaginate(user)}
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handleNavigate(item)}>
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            </TouchableOpacity>
          )}
        />
      </Container>
    );
  }
}
