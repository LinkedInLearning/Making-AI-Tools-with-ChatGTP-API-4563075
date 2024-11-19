# ChatGPT APIで作るAIツール
LinkedInラーニングの「HTML/CSS 入門」コース用のリポジトリです。このコースは [LinkedInラーニング][lil-course-url]で視聴できます。

![ChatGPT APIで作るAIツール][lil-thumbnail-url] 
生成AIを自身の業務や会社で活用したいけど、自社に合ったサービスが見つからない。そんな経験はありませんか？ChatGPTをAPIと連携させれば、自身の業務や会社に特化した生成AIツールを作ることができます。このコースではChatGPT APIを使ってAIチャットボットを実際に作成しながら、ChatGPTをAPIと連携させる方法を解説します。APIの意味や開発環境の構築、開発したツールのファインチューニングやデバックの手順など生成AIツールの作成手順をひとつひとつ順を追って説明します。このコースを見れば自身の業務に最適化された生成AIツールが作れるようになり、日々の業務を劇的に効率化することができるようになるでしょう。

## リポジトリの使い方
このリポジトリには必要に応じてブランチが設けられています。ブランチのポップアップメニューを使用して、使用するブランチに切り替えたあとにコースを視聴してください。またURLに`「/tree/ブランチ名」`を追加することで、アクセスしたいブランチに移動することも可能です。

## ブランチ
ブランチはレッスンごとに作成されている場合があります。その場合はブランチ名に`「章番号_レッスン番号」`が付けられています。例えば`「02_03」`という名前のブランチは、2章の上から3番目のレッスン用のブランチとなります。

レッスン前と後のコードを格納しているブランチもあります。該当ブランチには「開始時」（beginning）を表す`「b」`と、「終了時」（ending）を表す`「e」` がブランチ名についています。`「b」`のブランチにはレッスン開始時点のコードが、`「e」`のブランチにはレッスン終了時点のコードが格納されています。また「main」のブランチにはコードの最終形が格納されています。

ファイルに変更を加えた後に、エクササイズファイルのブランチを次のブランチに切り替えたさい、次のようなメッセージが表示されることがあります。

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

この問題を解決するには：
	
次のコマンドで変更を加えます：git add .

次のコマンドで変更をコミットします：git commit -m "some message"

## GitHub Codespacesについて
プログラミング言語を学ぶ最良の方法は、実際にそれを使用することです。それがこのコースがGitHub Codespacesと統合されている理由です。GitHub Codespacesは、あなたが普段使っているIDEのすべての機能を提供するクラウド上の手軽な開発環境です。ローカルマシンのセットアップも必要ありません。 GitHub Codespacesを使えば、あなたが職場で使っている他のツールを使用しながら、どのパソコンからでもいつでもプログラミングの実践的な練習ができます。「このコースでGitHub Codespacesを使うには」の動画をチェックして、その使い方を学びましょう。

### インストラクター

**児玉知也**

_株式会社TENHO CTO_

この講師の他のコースを視聴する：[LinkedInラーニング](https://www.linkedin.com/learning/instructors/20257002)

[lil-course-url]: (https://www.linkedin.com/learning/making-ai-tools-with-chatgpt-api/)https://www.linkedin.com/learning/making-ai-tools-with-chatgpt-api/
[lil-thumbnail-url]: https://media.licdn.com/dms/image/D4D0DAQEH-kGkU9s0ow/learning-public-crop_675_1200/0/1710193263997?e=2147483647&v=beta&t=wnK85IKMvhxrv-H3-nFJ_8l_RNIhICmVPTfKstd518k

