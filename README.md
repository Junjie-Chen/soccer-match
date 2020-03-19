# Soccer Match

_Read data of soccer matches from a .csv file, analyze the number of winning games of a particular team and log the analysis in the console and the browser using object composition, class inheritance, generics, enum and tuple_

## Steps

1. Install `typescript` globally: `npm install -g typescript`
2. Fork and clone this repository: `git clone https://github.com/Your-Username/soccer-match.git`
3. Move into the root directory: `cd soccer-match`
4. Install all packages: `npm install`
5. Compile `src/*.ts` and execute `build/index.js`: `npm start`

## Result

```
Console:
Man United won 18 games.

Browser:
Winning Games
Man United won 18 games.
```

## Object Composition

Pros:
- Easy to swap out reference to one object and replace it with another
- Delegate behaviors to behaviors of other objects without actual implementation

## Class Inheritance

Pros:
- Avoid to duplicate fields and methods between parent and child classes

Cons:
- Limited to updating fields and methods between parent and child classes

## Conclusion

Favor object composition over class inheritance
