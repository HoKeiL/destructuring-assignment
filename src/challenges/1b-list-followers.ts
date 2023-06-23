/**
 * listFollowers lists by name the first two followers and announces how many others there are
 * @param followerNames 
 * @returns 
 */



function listFollowers([first,second]: string[]): string {
  // complete function

  // use array destructuring, for practice!
  return `Followed by ${first}, ${second} and others`;
}

export default listFollowers;
