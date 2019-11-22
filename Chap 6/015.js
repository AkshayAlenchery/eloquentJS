//! Group Problem

class Group {
  constructor() {
    this.grp = []
    this.count = 0
  }

  add(num) {
    if (this.grp.indexOf(num) === -1) {
      this.grp[this.count] = num
      this.count++
    }
  }

  delete(x) {
    const loc = this.grp.indexOf(x)
    if (loc !== -1) {
      for (let i = loc; i < this.count - 1; i++) {
        this.grp[i] = this.grp[i + 1]
      }
      this.count--
      this.grp.length = this.count
    }
  }

  has(x) {
    const loc = this.grp.indexOf(x)
    if (loc !== -1) return true
    return false
  }

  static from(arr) {
    const group = new Group()
    const x = arr[0]
    const y = arr[1]
    for (let i = x; i <= y; i++) group.add(i)
    return group
  }
}

const group = Group.from([10, 20])
console.log(group.has(10))
// → true
console.log(group.has(30))
// → false
group.add(10)
group.delete(10)
console.log(group.has(10))
// → false
