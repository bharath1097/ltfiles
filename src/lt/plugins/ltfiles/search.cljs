(ns lt.plugins.ltfiles.search
 (:require [lt.objs.search :as search]
           [lt.object :as object]
           [lt.util.dom :as dom]
           [lt.objs.command :as cmd]
           [clojure.string :as s]
           [lt.objs.files :as files]
           [lt.plugins.ltfiles.clojure :as clojure]
           [goog.string :as gs]
           [lt.plugins.ltfiles.util :as util]))

(defmethod search/location "<file>" [_]
  [(util/current-file)])

(defmethod search/location "<folder>" [_]
  [(util/current-folder)])

(defmethod search/location "<plugins>" [_]
  [(files/lt-user-dir "plugins")])

(defn set-search [this v]
  (dom/val (dom/$ :input.search (object/->content this)) v))

(defn set-location [this v]
  (dom/val (dom/$ :input.loc (object/->content this)) v))

(defn set-replace [this v]
  (dom/val (dom/$ :input.replace (object/->content this)) v))

(defn search-current-folder []
  (set-location search/searcher "<folder>")
  (cmd/exec! :ltfiles.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show))

;; These commands could be composed in user.behaviors but that seems too messy
;; Would like to add selection detection to these but am limited by vim keys not
;; picking up selection

(cmd/command {:command :ltfiles.search-current-folder
              :desc "ltfiles: Searches current folder"
              :exec search-current-folder})

(defn search-current-file []
  (set-location search/searcher "<file>")
  (cmd/exec! :ltfiles.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show))

(cmd/command {:command :ltfiles.search-current-file
              :desc "ltfiles: Searches current file"
              :exec search-current-file})

(defn search-current-file-with-current-word []
  (set-search search/searcher (clojure/current-word))
  (set-location search/searcher "<file>")
  (cmd/exec! :ltfiles.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :ltfiles.search-current-file-with-current-word
              :desc "ltfiles: Searches current file with current word"
              :exec search-current-file-with-current-word})


(defn search-current-folder-with-current-word []
  (set-search search/searcher (clojure/current-word))
  (set-location search/searcher "<folder>")
  (cmd/exec! :ltfiles.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :ltfiles.search-current-folder-with-current-word
              :desc "ltfiles: Searches current folder with current word"
              :exec search-current-folder-with-current-word})

(defn search-current-folder-for-fn-usage []
  (set-search search/searcher
              (s/replace-first "/\\((\\S+\\/)?%s\\s+/" "%s" (gs/regExpEscape (clojure/current-word))))
  (set-location search/searcher "<folder>")
  (cmd/exec! :ltfiles.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :ltfiles.search-current-folder-for-fn-usage
              :desc "ltfiles: Searches current folder for fn usage"
              :exec search-current-folder-for-fn-usage})
