/**
 * listFollowers lists by name the first two followers and announces how many others there are
 * @param followerNames 
 * @returns 
 */



function listFollowers(followerNames: string[]): string {
  // complete function
  const  [first,second] = followerNames
  // use array destructuring, for practice!
  return `Followed by ${first}, ${second} and others`;
}

export default listFollowers;
