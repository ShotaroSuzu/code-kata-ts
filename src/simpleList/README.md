# Simple Lists
地味な値のリストには、意外と多くの意味があるのかもしれません。
基本的なリスト処理の実験をしてみましょう。

リストは私たちプログラマが最初に学ぶデータ構造の一つです。
しかし、なじみがあるからと行って、学ぶものが少ないとは限りません。

このKataでは、私たちは以下の基本的なインターフェースを持つリストに関して、三つの実装をしていきます。
- リストには要素が含まれていて、要素はstringの値を持っています。また、リスト自体に必要な基本的な機能も持っています。
- 新しいノードはリストの最後に追加されます。
- リストは与えられたstringの値を持つかどうかを判定でき、持っていたら、その値をかえします。
- リストの要素は削除できます。
- リストはすべての値を持つ配列を返します。

以下はユニットテストのサンプルコードです。
こうなるように実装してください。
```
list = List.new
assert_nil(list.find("fred"))
list.add("fred")
assert_equal("fred", list.find("fred").value())
assert_nil(list.find("wilma"))
list.add("wilma")
assert_equal("fred",  list.find("fred").value())
assert_equal("wilma", list.find("wilma").value())
assert_equal(["fred", "wilma"], list.values())

list = List.new
list.add("fred")
list.add("wilma")
list.add("betty")
list.add("barney")
assert_equal(["fred", "wilma", "betty", "barney"], list.values())
list.delete(list.find("wilma"))
assert_equal(["fred", "betty", "barney"], list.values())
list.delete(list.find("barney"))
assert_equal(["fred", "betty"], list.values())
list.delete(list.find("fred"))
assert_equal(["betty"], list.values())
list.delete(list.find("betty"))
assert_equal([], list.values())
```

Kataの思想は練習にあります。
完璧なリストを実装しなくても良いので、以下の三つの実装をコーディングしてください。

- 単方向参照リスト(それぞれの要素は次の要素への参照を持つ)
- 双方向参照リスト(それぞれの要素は次の要素と前の要素の両方への参照を持つ)
- その他、任意の実装。ただし、リスト内の要素を集めるために参照（ポインタ）を使用しないことが条件です。
もちろん、既存のリストに関連するライブラリは使わないでください。


## 目的
リストを実装するにあたって、魔法や驚きの方法などはありませんが、かなりの数の境界条件があります。
例えば、単方向参照リストの要素を削除する場合、先頭の要素を削除する場合は、特殊なケースとして扱う必要があるでしょうか？

このKataでは、こういった境界条件をできるだけ取り除く方法に集中してください。
そして、自問自答してください。
・自分が書いたコードは特殊な条件が少なくなっているだろうか、読みやすいだろうか
・こういった特殊ケースを排除するのはどのくらい簡単だろうか
・特殊なケースを排除すると、別の部分のコードが複雑になるといったトレードオフがないだろうか
・シンプルなコードになるちょうどよい塩梅はあるだろうか
